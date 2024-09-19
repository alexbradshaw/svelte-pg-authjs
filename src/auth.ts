import { SvelteKitAuth } from '@auth/sveltekit';
import PostgresAdapter from '@auth/pg-adapter';
import Google from '@auth/sveltekit/providers/google';
import { pool } from './db';

export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter: PostgresAdapter(pool),
  providers: [Google],
  trustHost: true,
  secret: process.env.SECRET || 'superSecretSecretYay',
  callbacks: {
    async session({ session, user }) {
      session.userId = user.id;
      return session;
    },
  },
});
