export class CreateTodoDto {
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
}
