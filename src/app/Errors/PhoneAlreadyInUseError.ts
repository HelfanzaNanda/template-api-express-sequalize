import { BaseError } from "./BaseError";

class PhoneAlreadyInUseError extends BaseError {
    constructor() {
        super(
            400,
            "The provided phone is already being used by another account."
        );
    }
}

export { PhoneAlreadyInUseError };