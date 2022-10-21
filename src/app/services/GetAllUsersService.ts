import { User } from "../entities/User";
import dataSource from "../../database/data-source";

interface paginateOptions {
  page: number;
  per_page: number;
}

interface metaOptions {
  page: number;
  per_page: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export class GetAllUsersService {
  async execute({ page, per_page }: paginateOptions): Promise<any> {
    const connection = await dataSource.initialize();
    const usersRepository = connection.getRepository(User);

    const [users, count] = await usersRepository.findAndCount({
      take: per_page || 4,
      skip: (page - 1) * per_page || 0,
    });

    const meta: metaOptions = {
      page,
      per_page,
      itemCount: count,
      pageCount: Math.round(count / per_page),
      hasPreviousPage: page > 1,
      hasNextPage: (per_page * page) < count 
    };

    await connection.destroy();
    return {meta, users};
  }
}
