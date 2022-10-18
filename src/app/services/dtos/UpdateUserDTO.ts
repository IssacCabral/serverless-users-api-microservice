import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from "class-validator";

export interface UpdateUserDTO {
  name?: string;
  cpf?: string;
  email?: string;
  password?: string;
}

export class UpdateUserInput {
  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: "invalid characters" })
  @MinLength(3)
  @MaxLength(50)
  name?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: "invalid cpf" })
  @Matches(/^\d{3}.\d{3}.\d{3}-\d{2}$/, {
    message: "cpf field should be a valid cpf",
  })
  cpf?: string;

  @IsEmail()
  @IsOptional()
  @IsNotEmpty({ message: "invalid email" })
  email?: string;

  @IsString()
  @IsOptional()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: "password too weak",
  })
  password?: string;
}
