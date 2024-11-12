import { Repository } from "./repository";

export function createService(repository: Repository) {
  return {
    getAllMessages: async () => repository.getAllMessages(),
  };
}
