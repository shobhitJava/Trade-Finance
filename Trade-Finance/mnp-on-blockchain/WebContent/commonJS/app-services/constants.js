var Constants = {}; // Object to store all constants

// Http Service related constants
Constants.PROTOCOL = "http://";

//subscriber context
Constants.CONTEXT_SUBSCRIBER_REGISTER = "/subsRegister";
Constants.CONTEXT_VERIFY_OTP = "/verifyotp";
Constants.CONTEXT_LOGIN = "/login";
Constants.CONTEXT_LOGOUT = "/logout";
Constants.CONTEXT_CHANGE_PASSWORD = "/changePassword";
Constants.CONTEXT_FORGET_PASSWORD = "/forgetPassword";
Constants.CONTEXT_GEN_UPC = "/genupc";
Constants.CONTEXT_MNP_STATUS = "/mnpstatus";

//operation context
Constants.CONTEXT_UPC_VALID = "/upcValid";
Constants.CONTEXT_ROPORT_OUT = "/roportout";
Constants.CONTEXT_KYC_PROCESS = "/kycprocess";
Constants.CONTEXT_OPERATOR_LOGIN = "/login";

Object.freeze(Constants); // Make the consts truly read only
