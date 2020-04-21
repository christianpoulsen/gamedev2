import { StateCheck } from '../store/taskActions';

export const isStateCheck = (object: unknown): object is StateCheck => {
    const check = (object as StateCheck)?.check !== undefined;
    const yes = (object as StateCheck)?.yes !== undefined;
    const no = (object as StateCheck)?.no !== undefined;

    return check && yes && no;
}

export default isStateCheck;
