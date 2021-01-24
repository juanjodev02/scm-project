export default  interface Operation {
    exec(a:number, b: number): number
}

export interface OperationArgs {
    a: number;
    b: number;
}
