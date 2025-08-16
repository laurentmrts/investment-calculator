import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// this ensure jest-dom can be used in tests
import '@testing-library/jest-dom/vitest'

afterEach(() => {
    cleanup()
})
