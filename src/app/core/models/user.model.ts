// Le mot-clé 'export' rend ce modèle utilisable partout dans l'app
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'User' | 'Guest';
  bio?: string;
}
