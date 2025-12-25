# Troubleshooting Guide

## ChunkLoadError: Loading chunk failed

If you encounter a `ChunkLoadError` or "Loading chunk app/layout failed" error:

### Solution 1: Clear Cache and Restart (Recommended)

1. **Stop the dev server** (Ctrl+C in terminal)

2. **Clear the build cache:**
   ```bash
   # Windows PowerShell
   Remove-Item -Recurse -Force .next
   
   # Or manually delete the .next folder
   ```

3. **Restart the dev server:**
   ```bash
   npm run dev
   ```

### Solution 2: Full Clean Install

If Solution 1 doesn't work:

1. **Stop the dev server**

2. **Clear all caches:**
   ```bash
   # Windows PowerShell
   Remove-Item -Recurse -Force .next
   Remove-Item -Recurse -Force node_modules\.cache
   ```

3. **Reinstall dependencies (optional, if issues persist):**
   ```bash
   Remove-Item -Recurse -Force node_modules
   npm install
   ```

4. **Restart:**
   ```bash
   npm run dev
   ```

### Solution 3: Port Conflict

If the error persists, try using a different port:

```bash
npm run dev -- -p 3001
```

Then access at `http://localhost:3001`

## Common Issues

### "Module not found" errors
- Ensure all dependencies are installed: `npm install`
- Check that file paths are correct (case-sensitive on some systems)

### Build errors
- Run `npm run build` to see detailed error messages
- Check TypeScript errors: `npx tsc --noEmit`

### Styling not working
- Ensure Tailwind CSS is properly configured
- Check `tailwind.config.ts` and `postcss.config.mjs`
- Restart the dev server after config changes

### Theme not persisting
- Check browser localStorage is enabled
- Clear browser cache and try again

## Still Having Issues?

1. Check Next.js version: `npm list next`
2. Update to latest: `npm install next@latest`
3. Check Node.js version (should be 18+): `node --version`
4. Review Next.js documentation: https://nextjs.org/docs

