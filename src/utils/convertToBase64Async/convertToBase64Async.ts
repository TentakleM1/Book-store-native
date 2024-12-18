export const convertToBase64Async = async (
  file: File,
): Promise<string | unknown> => {
  try {
    return new Promise(
      (resolve: (value: string | ArrayBuffer | null) => void) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.readAsDataURL(file);
      },
    );
  } catch (error) {
    console.error('Ошибка при переводе файла:', error);
  }
};
