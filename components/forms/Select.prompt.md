Native select styled to match Input, with a hairline chevron.

```jsx
<Select label="Environment" options={['Production', 'Staging', 'Preview']}
        value={env} onChange={(e) => setEnv(e.target.value)} />
```

Pass `options` (strings or `{value,label}`) or `<option>` children.
