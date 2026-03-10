// Shared reactive scroll state — one source of truth for all gallery cards.
// Set by the gallery page; read by gallery-card components.
export const scrollState = $state({ isScrolling: false });
