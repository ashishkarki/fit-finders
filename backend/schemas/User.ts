/* eslint-disable @typescript-eslint/semi */
/* eslint-disable prettier/prettier */
import { password, text } from '@keystone-next/fields'
import { list } from '@keystone-next/keystone/schema'

export const User = list({
  //   access: {
  //     create: ({ authentication: { item: user } }) => !!user,
  //     read: ({ authentication: { item: user } }) => !!user,
  //     update: ({ authentication: { item: user } }) => !!user,
  //     delete: ({ authentication: { item: user } }) => !!user,
  //   },
  // ui
  fields: {
    name: text({
      isRequired: true,
    }),
    email: text({
      isRequired: true,
      isUnique: true,
    }),
    password: password(),
    // roles, cart and orders
  },
})
