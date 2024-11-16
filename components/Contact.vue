<script setup lang="ts">
const { name, surname, phone, address, message, userSubmit, formMeta } =
  useContact();
</script>

<template>
  <div class="w-full flex items-center justify-center mb-8">
    <div class="w-full px-3 sm:px-0 sm:w-2/3 grid grid-cols-1 gap-3">
      <p>Biz bilan bog'lanish uchun ushbu maydonni to'ldiring.</p>
      <!-- name -->
      <div>
        <input
          id="user_name"
          v-model="name.value.value"
          class="w-full outline-none indent-3 border text-lg py-2 transition-all rounded-lg"
          placeholder="Ism"
          required
          autocomplete="off"
          :class="`${
            name.meta.valid && name.meta.dirty ? 'border-blue-600' : ''
          } ${
            !name.meta.valid && !!name.errorMessage.value
              ? 'border-red-500'
              : ''
          } `"
        />
        <label class="text-xs text-red-500" for="user_name">{{
          name.errorMessage.value
        }}</label>
      </div>
      <!-- surname -->
      <div>
        <input
          id="user_surname"
          v-model="surname.value.value"
          class="w-full outline-none indent-3 border text-lg py-2 rounded-lg"
          placeholder="Familya"
          required
          autocomplete="off"
          :class="`${
            surname.meta.valid && surname.meta.dirty ? 'border-blue-600' : ''
          } ${
            !surname.meta.valid && !!surname.errorMessage.value
              ? 'border-red-500'
              : ''
          } `"
        />
        <label class="text-xs text-red-500" for="user_surname">{{
          surname.errorMessage.value
        }}</label>
      </div>
      <!-- phone number -->
      <div>
        <div
          id="user_phone"
          class="flex items-center justify-center border text-lg py-2 focus:bg-black/60 focus:text-white transition-all rounded-lg"
          :class="`${
            phone.meta.valid && phone.meta.dirty ? 'border-blue-600' : ''
          } ${
            !phone.meta.valid && !!phone.errorMessage.value
              ? 'border-red-500'
              : ''
          } `"
        >
          <span class="indent-3 text-lg">+998</span>
          <input
            type="number"
            v-model="phone.value.value"
            class="w-full outline-none indent-1"
            placeholder="90 123 45 67"
            required
            autocomplete="off"
          />
        </div>
        <label class="text-xs text-red-500" for="user_phone">{{
          phone.errorMessage.value
        }}</label>
      </div>
      <!-- message -->
      <textarea
        v-model="message.value.value"
        class="w-full outline-none indent-3 border text-lg transition-all rounded-lg"
        placeholder="Qo'shimcha xabar qoldirishingiz mumkin"
        rows="3"
      />
      <!-- submit button -->
      <BaseBtn
        :disabled="!formMeta.valid"
        type="submit"
        @click.prevent="userSubmit"
        :class="
          formMeta.valid ? 'cursor-pointer' : 'cursor-not-allowed bg-black/80'
        "
      >
        Bog'lanish
      </BaseBtn>
      
    </div>
  </div>
</template>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
