export function createRepository() {
  return {
    async getAllMessages() {
      return [];
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
