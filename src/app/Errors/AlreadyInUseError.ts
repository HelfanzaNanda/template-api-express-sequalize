import { BaseError } from "./BaseError";

class AlreadyInUseError extends BaseError {
    constructor(attribute : string) {
        super(
            400,
            `The provided ${attribute} is already being used by the database.`
        );
    }
}

export { AlreadyInUseError };