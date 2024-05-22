export type LoginAction = {
  error?: string;
  success?: boolean;
  admin?: any;
};

export type CreateProjectAction = {
  error?: string;
  success?: string;
  project?: string;
};
