<template>
  <table class="min-w-full divide-y divide-gray-300">
    <thead>
      <tr>
        <th
          scope="col"
          class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
        >
          Name
        </th>
        <th
          scope="col"
          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Title
        </th>
        <th
          scope="col"
          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Email
        </th>
        <th
          scope="col"
          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Role
        </th>
        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
          <span class="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr v-for="person in people" :key="person.email">
        <td
          class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
        >
          {{ person.name }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ person.title }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ person.email }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ person.role }}
        </td>
        <td
          class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
        >
          <a href="#" class="text-indigo-600 hover:text-indigo-900"
            >Edit<span class="sr-only">, {{ person.name }}</span></a
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const people = [
  {
    name: "John Doe",
    title: "Software Engineer",
    email: "john.doe@example.com",
    role: "Admin",
  },
  {
    name: "Jane Smith",
    title: "Product Manager",
    email: "jane.smith@example.com",
    role: "User",
  },
  {
    name: "Alice Johnson",
    title: "Designer",
    email: "alice.johnson@example.com",
    role: "Admin",
  },
];
</script>
