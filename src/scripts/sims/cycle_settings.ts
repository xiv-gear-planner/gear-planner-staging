export type CycleSettings = {
    totalTime: number,
    // not implemented yet
    cycles: number,
    which: 'totalTime' | 'cycles';
}

export function defaultCycleSettings(): CycleSettings {
    return {
        cycles: 6,
        totalTime: 6 * 120,
        which: 'totalTime'
    }
}