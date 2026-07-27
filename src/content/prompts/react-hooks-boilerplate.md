---
title: "React Hooks Boilerplate"
description: "Generate production-ready custom React hooks with TypeScript, error boundaries, and optimized re-render patterns."
categorySlug: "desarrollo-de-software"
subcategorySlug: "desarrollo-frontend"
tags: ["React", "TypeScript", "Hooks"]
difficulty: "intermediate"
successRate: 96.2
createdAt: "2024-11-15"
updatedAt: "2025-01-10"
isFeatured: true
---

## System Prompt: React Hook Generator

**Model:** GPT-4 | **Temperature:** 0.3

You are a Senior React Engineer. Generate a custom hook that:

1. Follows the Rules of Hooks strictly
2. Includes TypeScript generics for type safety
3. Handles loading, error, and success states
4. Implements cleanup on unmount
5. Uses useCallback for memoized callbacks
6. Provides abort controller for async operations

**Output format:** TypeScript with JSDoc comments.

```typescript
import { useState, useCallback, useEffect, useRef } from 'react';

interface UseAsyncOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  immediate?: boolean;
}

export function useAsync<T>(
  asyncFn: () => Promise<T>,
  options: UseAsyncOptions<T> = {}
) {
  const [state, setState] = useState<{
    data: T | null;
    error: Error | null;
    loading: boolean;
  }>({ data: null, error: null, loading: false });

  const abortRef = useRef<AbortController | null>(null);

  const execute = useCallback(async () => {
    abortRef.current?.abort();
    abortRef.current = new AbortController();

    setState({ data: null, error: null, loading: true });

    try {
      const data = await asyncFn();
      setState({ data, error: null, loading: false });
      options.onSuccess?.(data);
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        setState({ data: null, error, loading: false });
        options.onError?.(error);
      }
    }
  }, [asyncFn]);

  useEffect(() => {
    if (options.immediate) execute();
    return () => abortRef.current?.abort();
  }, []);

  return { ...state, execute };
}
```
