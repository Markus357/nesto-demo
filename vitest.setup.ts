// Ensure React treats the environment as act-enabled to silence warnings
// See: https://react.dev/reference/react/act#how-to-suppress-the-warning
// and testing environments that don't auto-detect act
(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;


