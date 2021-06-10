export type MyEvents = Partial<Record<keyof GlobalEventHandlersEventMap, (e: Event) => void>>
