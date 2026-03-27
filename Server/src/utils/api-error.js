class ApiError{
    constructor(statuscode,message="Something Went Worng",error=[],stack=""){
        this.statuscode=statuscode;
        this.message=message;
        this.data=null;
        this.success=false;

        if (stack) {
            this.stack=stack;
        } else {
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export  {ApiError};