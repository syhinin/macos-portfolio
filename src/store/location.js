import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { LOCATIONS } from '@constants'

const DEFAULT_LOCATION = LOCATIONS.WORK

export const useLocationStore = create(immer((set) => ({
    activeLocation: DEFAULT_LOCATION,
    setActiveLocation: (location = null) => set((state) => {
        state.activeLocation = location
    }),
    resetActiveLocation: () => set((state) => {
        state.activeLocation = DEFAULT_LOCATION
    })

})))
