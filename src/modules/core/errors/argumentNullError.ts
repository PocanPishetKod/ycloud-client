export class ArgumentNullError extends Error {
    constructor(argumentName: string) {
        super("Argument null error: " + argumentName);
    }
}