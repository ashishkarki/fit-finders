/* eslint-disable @typescript-eslint/semi */
/* eslint-disable prettier/prettier */
import 'dotenv/config'
import { config, createSchema } from '@keystone-next/keystone/schema'
import {
  statelessSessions,
  withItemData,
} from '@keystone-next/keystone/session'

import { createAuth } from '@keystone-next/auth'
import { User } from './schemas/User'

const dbUrl = process.env.DATABASE_URL

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  secret: process.env.COOKIE_SECRET,
}

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // todo add initial roles
  },
})

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: dbUrl,
      // add data seeding
    },
    lists: createSchema({
      User,
    }),
    ui: {
      // show ur only for people who pass this test
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      // graphql query
      User: 'id',
    }),
  }),
)
