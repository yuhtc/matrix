declare module 'ml-matrix' {
  type MaybeMatrix = Matrix | number[][];
  type Rng = () => number;
  type ScalarOrMatrix = number | Matrix;
  type MatrixDimension = 'row' | 'column';

  export class MatrixColumnView extends Matrix {
    constructor(matrix: Matrix, column: number);
  }
  export class MatrixColumnSelectionView extends Matrix {
    constructor(matrix: Matrix, columnIndices: number[]);
  }
  export class MatrixFlipColumnView extends Matrix {
    constructor(matrix: Matrix);
  }
  export class MatrixFlipRowView extends Matrix {
    constructor(matrix: Matrix);
  }
  export class MatrixRowView extends Matrix {
    constructor(matrix: Matrix, row: number);
  }
  export class MatrixRowSelectionView extends Matrix {
    constructor(matrix: Matrix, rowIndices: number[]);
  }
  export class MatrixSelectionView extends Matrix {
    constructor(matrix: Matrix, rowIndices: number[], columnIndices: number[]);
  }
  export class MatrixSubView extends Matrix {
    constructor(
      matrix: Matrix,
      startRow: number,
      endRow: number,
      startColumn: number,
      endColumn: number
    );
  }
  export class MatrixTransposeView extends BaseView {
    constructor(matrix: Matrix);
  }
  export class Matrix {
    readonly size: number;
    readonly rows: number;
    readonly columns: number;

    constructor(nRows: number, nColumns: number);
    constructor(data: number[][]);
    constructor(otherMatrix: Matrix);

    static from1DArray(
      newRows: number,
      newColumns: number,
      newData: number[]
    ): Matrix;
    static rowVector(newData: number[]): Matrix;
    static columnVector(newData: number[]): Matrix;
    static zeros(rows: number, columns: number): Matrix;
    static ones(rows: number, columns: number): Matrix;
    static rand(rows: number, columns: number, rng?: Rng): Matrix;
    static random(rows: number, columns: number, rng?: Rng): Matrix;
    static randInt(
      rows: number,
      columns: number,
      maxValue?: number,
      rng?: Rng
    ): Matrix;
    static eye(rows: number, columns?: number, value?: number): Matrix;
    static identity(rows: number, columns?: number, value?: number): Matrix;
    static diag(data: number[], rows?: number, columns?: number): Matrix;
    static diagonal(data: number[], rows?: number, columns?: number): Matrix;
    static min(matrix1: Matrix, matrix2: Matrix): Matrix;
    static max(matrix1: Matrix, matrix2: Matrix): Matrix;
    static checkMatrix(value: any): Matrix;
    static isMatrix(value: any): value is Matrix;

    apply(callback: Function): this;
    to1DArray(): number[];
    to2DArray(): number[][];
    isRowVector(): boolean;
    isColumnVector(): boolean;
    isVector(): boolean;
    isSquare(): boolean;
    isSymmetric(): boolean;
    isEchelonForm(): boolean;
    isReducedEchelonForm(): boolean;
    set(rowIndex: number, columnIndex: number, value: number): this;
    get(rowIndex: number, columnIndex: number): number;
    repeat(rowRep: number, colRep: number): Matrix;
    fill(value: number): this;
    neg(): Matrix;
    negate(): Matrix;
    addRow(index: number, array: number[] | Matrix): this;
    getRow(index: number): number[];
    getRowVector(index: number): Matrix;
    setRow(index: number, array: number[] | Matrix): Matrix;
    swapRows(row1: number, row2: number): Matrix;
    addColumn(index: number, array: number[] | Matrix): this;
    getColumn(index: number): number[];
    getColumnVector(index: number): Matrix;
    setColumn(index: number, array: number[] | Matrix): Matrix;
    swapColumns(column1: number, column2: number): Matrix;
    addRowVector(vector: number[] | Matrix): Matrix;
    subRowVector(vector: number[] | Matrix): Matrix;
    mulRowVector(vector: number[] | Matrix): Matrix;
    divRowVector(vector: number[] | Matrix): Matrix;
    addColumnVector(vector: number[] | Matrix): Matrix;
    subColumnVector(vector: number[] | Matrix): Matrix;
    mulColumnVector(vector: number[] | Matrix): Matrix;
    divColumnVector(vector: number[] | Matrix): Matrix;
    mulRow(index: number, value: number): Matrix;
    mulColumn(index: number, value: number): Matrix;
    max(): number;
    maxIndex(): number[];
    min(): number;
    minIndex(): number[];
    maxRow(row: number): number;
    maxRowIndex(row: number): number[];
    minRow(row: number): number;
    minRowIndex(row: number): number[];
    maxColumn(column: number): number;
    maxColumnIndex(column: number): number[];
    minColumn(column: number): number;
    minColumnIndex(column: number): number[];
    diag(): number[];
    diagonal(): number[];

    /**
     * Returns the sum of all elements of the matrix.
     */
    sum(): number;

    /**
     * Returns the sum by the given dimension.
     * @param by - sum by 'row' or 'column'.
     */
    sum(by: MatrixDimension): number[];

    /**
     * Returns the product of all elements of the matrix.
     */
    product(): number;

    /**
     * Returns the product by the given dimension.
     * @param by - product by 'row' or 'column'.
     */
    product(by: MatrixDimension): number[];

    /**
     * Returns the mean of all elements of the matrix.
     */
    mean(): number;

    /**
     * Returns the mean by the given dimension.
     * @param by - mean by 'row' or 'column'.
     */
    mean(by: MatrixDimension): number[];

    prod(): number;
    norm(type: 'frobenius' | 'max'): number;
    cumulativeSum(): this;
    dot(vector2: Matrix): number;
    mmul(other: Matrix): Matrix;
    strassen2x2(other: Matrix): Matrix;
    strassen3x3(other: Matrix): Matrix;
    mmulStrassen(y: Matrix): Matrix;
    scaleRows(min?: number, max?: number): Matrix;
    scaleColumns(min?: number, max?: number): Matrix;
    reverseRows(): this;
    reverseColumns(): this;
    kroneckerProduct(other: Matrix): Matrix;
    tensorProduct(other: Matrix): Matrix;
    transpose(): Matrix;
    sortRows(compareFunction: Function): this;
    sortColumns(compareFunction: Function): this;
    subMatrix(
      startRow: number,
      endRow: number,
      startColumn: number,
      endColumn: number
    ): Matrix;
    subMatrixRow(
      indices: number[],
      startColumn?: number,
      endColumn?: number
    ): Matrix;
    subMatrixColumn(
      indices: number[],
      startRow?: number,
      endRow?: number
    ): Matrix;
    setSubMatrix(
      matrix: Matrix | number[],
      startRow: number,
      startColumn: number
    ): Matrix;
    selection(rowIndices: number[], columnIndices: number[]): Matrix;
    trace(): number;
    clone(): Matrix;
    entropy(eps?: number): number;
    variance(unbiased?: boolean, means?: number[]): number[];
    standardDeviation(unbiased?: boolean, means?: number[]): number[];

    // From here we document methods dynamically generated from operators

    // Mathematical operators
    // inplace
    add(value: ScalarOrMatrix): Matrix;
    sub(value: ScalarOrMatrix): Matrix;
    subtract(value: ScalarOrMatrix): Matrix;
    mul(value: ScalarOrMatrix): Matrix;
    multiply(value: ScalarOrMatrix): Matrix;
    div(value: ScalarOrMatrix): Matrix;
    divide(value: ScalarOrMatrix): Matrix;
    mod(value: ScalarOrMatrix): Matrix;
    modulus(value: ScalarOrMatrix): Matrix;
    and(value: ScalarOrMatrix): Matrix;
    or(value: ScalarOrMatrix): Matrix;
    xor(value: ScalarOrMatrix): Matrix;
    leftShift(value: ScalarOrMatrix): Matrix;
    signPropagatingRightShift(value: ScalarOrMatrix): Matrix;
    rightShift(value: ScalarOrMatrix): Matrix;
    zeroFillRightShift(value: ScalarOrMatrix): Matrix;
    // new matrix
    static add(matrix: Matrix, value: ScalarOrMatrix): Matrix;
    static sub(matrix: Matrix, value: ScalarOrMatrix): Matrix;
    static subtract(matrix: Matrix, value: ScalarOrMatrix): Matrix;
    static mul(matrix: Matrix, value: ScalarOrMatrix): Matrix;
    static multiply(matrix: Matrix, value: ScalarOrMatrix): Matrix;
    static div(matrix: Matrix, value: ScalarOrMatrix): Matrix;
    static divide(matrix: Matrix, value: ScalarOrMatrix): Matrix;
    static mod(matrix: Matrix, value: ScalarOrMatrix): Matrix;
    static modulus(matrix: Matrix, value: ScalarOrMatrix): Matrix;
    static and(matrix: Matrix, value: ScalarOrMatrix): Matrix;
    static or(matrix: Matrix, value: ScalarOrMatrix): Matrix;
    static xor(matrix: Matrix, value: ScalarOrMatrix): Matrix;
    static leftShift(matrix: Matrix, value: ScalarOrMatrix): Matrix;
    static signPropagatingRightShift(
      matrix: Matrix,
      value: ScalarOrMatrix
    ): Matrix;
    static rightShift(matrix: Matrix, value: ScalarOrMatrix): Matrix;
    static zeroFillRightShift(matrix: Matrix, value: ScalarOrMatrix): Matrix;

    // Functional operators (one arg)
    // inplace
    not(): Matrix;
    abs(): Matrix;
    acos(): Matrix;
    acosh(): Matrix;
    asin(): Matrix;
    asinh(): Matrix;
    atan(): Matrix;
    atanh(): Matrix;
    cbrt(): Matrix;
    ceil(): Matrix;
    clz32(): Matrix;
    cos(): Matrix;
    cosh(): Matrix;
    exp(): Matrix;
    expm1(): Matrix;
    floor(): Matrix;
    fround(): Matrix;
    log(): Matrix;
    log1p(): Matrix;
    log10(): Matrix;
    log2(): Matrix;
    round(): Matrix;
    sign(): Matrix;
    sin(): Matrix;
    sinh(): Matrix;
    sqrt(): Matrix;
    tan(): Matrix;
    tanh(): Matrix;
    trunc(): Matrix;
    // new matrix
    static not(value: Matrix): Matrix;
    static abs(value: Matrix): Matrix;
    static acos(value: Matrix): Matrix;
    static acosh(value: Matrix): Matrix;
    static asin(value: Matrix): Matrix;
    static asinh(value: Matrix): Matrix;
    static atan(value: Matrix): Matrix;
    static atanh(value: Matrix): Matrix;
    static cbrt(value: Matrix): Matrix;
    static ceil(value: Matrix): Matrix;
    static clz32(value: Matrix): Matrix;
    static cos(value: Matrix): Matrix;
    static cosh(value: Matrix): Matrix;
    static exp(value: Matrix): Matrix;
    static expm1(value: Matrix): Matrix;
    static floor(value: Matrix): Matrix;
    static fround(value: Matrix): Matrix;
    static log(value: Matrix): Matrix;
    static log1p(value: Matrix): Matrix;
    static log10(value: Matrix): Matrix;
    static log2(value: Matrix): Matrix;
    static round(value: Matrix): Matrix;
    static sign(value: Matrix): Matrix;
    static sin(value: Matrix): Matrix;
    static sinh(value: Matrix): Matrix;
    static sqrt(value: Matrix): Matrix;
    static tan(value: Matrix): Matrix;
    static tanh(value: Matrix): Matrix;
    static trunc(value: Matrix): Matrix;

    // Functional operators with one arg
    // inplace
    pow(value: ScalarOrMatrix): Matrix;
    // new matrix
    static pow(matrix: Matrix, value: ScalarOrMatrix): Matrix;
  }
  export default Matrix;

  class SingularValueDecomposition {
    constructor(value: MaybeMatrix, options?: ISVDOptions);
    inverse(): Matrix;
    solve(value: Matrix): Matrix;
    solveForDiagonal(value: number[]): Matrix;
    readonly norm2: number;
    readonly threshold: number;
    readonly leftSingularVectors: Matrix;
    readonly condition: number;
    readonly rank: number;
    readonly rightSingularVectors: Matrix;
    readonly diagonal: number[];
    readonly diagonalMatrix: Matrix;
  }
  export interface ISVDOptions {
    computeLeftSingularVectors?: boolean;
    computeRightSingularVectors?: boolean;
    autoTranspose?: boolean;
  }
  export { SingularValueDecomposition, SingularValueDecomposition as SVD };

  class EigenvalueDecomposition {
    constructor(value: MaybeMatrix, options?: IEVDOptions);
    readonly diagonalMatrix: Matrix;
    readonly eigenvectorMatrix: Matrix;
    readonly imaginaryEigenvalues: number[];
    readonly realEigenvalues: number[];
  }
  export interface IEVDOptions {
    assumeSymmetric?: boolean;
  }
  export { EigenvalueDecomposition, EigenvalueDecomposition as EVD };

  class CholeskyDecomposition {
    constructor(value: MaybeMatrix);
    solve(value: Matrix): Matrix;
    readonly lowerTriangularMatrix: Matrix;
  }
  export { CholeskyDecomposition, CholeskyDecomposition as CHO };

  class LuDecomposition {
    constructor(value: MaybeMatrix);
    isSingular(): boolean;
    solve(value: Matrix): Matrix;
    readonly determinant: number;
    readonly lowerTriangularMatrix: Matrix;
    readonly pivotPermutationVector: number[];
    readonly upperTriangularMatrix: Matrix;
  }
  export { LuDecomposition, LuDecomposition as LU };

  class QrDecomposition {
    constructor(value: MaybeMatrix);
    isFullRank(): boolean;
    solve(value: Matrix): Matrix;
    readonly orthogonalMatrix: Matrix;
    readonly upperTriangularMatrix: Matrix;
  }
  export { QrDecomposition, QrDecomposition as QR };

  export function solve(
    leftHandSide: MaybeMatrix,
    rightHandSide: MaybeMatrix,
    useSVD?: boolean
  ): Matrix;

  export function inverse(matrix: MaybeMatrix, useSVD?: boolean): Matrix;

  export function determinant(matrix: MaybeMatrix): number;

  export interface ILinearDependenciesOptions {
    thresholdValue?: number;
    thresholdError?: number;
  }
  export function linearDependencies(
    matrix: MaybeMatrix,
    options?: ILinearDependenciesOptions
  ): Matrix;

  export function pseudoInverse(
    matrix: MaybeMatrix,
    threshold?: number
  ): Matrix;
}
