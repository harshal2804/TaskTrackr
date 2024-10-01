export interface ITokenGenerator {
    generate(payload: string): string;
    verify(password: string, hash: string): string | object;
}