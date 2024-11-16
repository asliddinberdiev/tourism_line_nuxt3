import * as yup from "yup";
import { useField, useForm } from "vee-validate";
import { useToast } from "vue-toastification";
import { useBotStore } from "~/store/bot";
import { storeToRefs } from "pinia";

export default function useContact() {
  const toast = useToast();
  const { locale } = useI18n();
  const activeLang: Ref<string> = ref(String(locale.value));

  // store
  const store = useBotStore();
  const { admins } = storeToRefs(store);
  const { sendMessage } = store;

  const user = ref({
    name: "",
    surname: "",
    phone: "",
    message: "",
  });

  // Field error message
  const mesReq: Ref<string> = ref("This field required");
  function minMes(number: number) {
    return `This field must be  at least ${number} characters`;
  }
  function maxMes(number: number) {
    return `This field must be  at most ${number} characters`;
  }
  // Schema
  const schema = yup.object({
    name: yup
      .string()
      .required(mesReq.value)
      .min(3, minMes(3))
      .max(15, maxMes(15)),
    surname: yup
      .string()
      .required(mesReq.value)
      .min(3, minMes(3))
      .max(20, maxMes(15)),
    phone: yup
      .string()
      .required(mesReq.value)
      .matches(
        /^(93|94|50|55|77|88|97|90|91|98|95|99|33)[0-9]{7}$/,
        "Invalid phone number"
      ),
  });

  // Useform
  const {
    handleSubmit,
    meta: formMeta,
    handleReset,
  } = useForm({
    initialValues: user,
    validationSchema: schema,
  });

  // Personal information
  const name = useField<string>("name");
  const surname = useField<string>("surname");
  const phone = useField<number>("phone");
  const message = useField<string>("message");

  /** actions **/
  const userSubmit = handleSubmit(async (values: any, { resetForm }) => {
    const send_bot_message: Ref<string> = ref(
      `Name: ${values.name},\nSurname: ${
        values.surname
      },\nPhone: ${Number(values.phone)},\nMessage: ${values.message}`
    );

    admins.value.forEach(async (admin) => {
      await sendMessage(admin.id, send_bot_message.value).catch((err) =>
        console.log("sendMessage error: ", err)
      );
    });

    if (activeLang.value === "uz") {
      toast.success(
        "Xabaringiz qabul qilindi.\nTez orada menejerlarimiz siz bilan bog'lanishadi."
      );
    } else if (activeLang.value === "ru") {
      toast.success(
        "Ваше сообщение было получено.\nНаши менеджеры свяжутся с вами в ближайшее время."
      );
    } else {
      toast.success(
        "Your message has been received.\nOur managers will contact you shortly."
      );
    }

    setTimeout(() => {
      resetForm();
    }, 2000);
  });

  return {
    name,
    surname,
    phone,
    message,
    userSubmit,
    formMeta,
    handleReset,
  };
}
