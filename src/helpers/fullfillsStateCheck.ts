import { Check, SupportedChecks } from '../store/taskActions';
import { State } from '../store';

export const FullfillsStateCheck = (statechecks: State["checks"], check: Check) => {

    switch (check) {
        case SupportedChecks.REGISTERED_COMPANY:
            return statechecks[check]
        case SupportedChecks.RIGHT_VP:
            return false;
        default:
            return false;
    }
}

export default FullfillsStateCheck;
