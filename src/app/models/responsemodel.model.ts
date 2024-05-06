export class ResponseModel {
    httpStatus!: number;
    statusMessage!: string;
    message!: string;
    errorMessage!: string;
    data: any;
    otherData: any;
    showResetPasswordPopUp!: boolean;
  }