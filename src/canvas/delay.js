export function delay(milliseconds, action) {
    if (action != null) {
        setTimeout(action, milliseconds);
    }
}