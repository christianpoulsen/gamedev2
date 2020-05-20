import { TaskWithoutCost } from './dataParser';
import { Task, Tasks, Dilemma, StateCheck, Result } from '../store/taskActions';

export const costParser = (tasks: TaskWithoutCost[]): Task[] => {
    
    const getCostOfNext = (next: Dilemma | StateCheck | Result): number => {
        return (next.type === Tasks.DILEMMA) ? getCostOfDilemma(next) : 0;
    }

    const getCostOfDilemma = (dilemma: Dilemma): number => {
        const minOption = dilemma.options.sort((a, b) => a.consequence.funding - b.consequence.funding)[0];
        return minOption.consequence.funding + getCostOfNext(minOption.next);
    }

    return tasks.map(task => ({
        ...task,
        cost: getCostOfDilemma(task.dilemma)
    }))
}

export default costParser;
