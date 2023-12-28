export default function generateId() {
    const maxId = savers.length > 0 ? Math.max(...savers.map((n) => n.id)) : 0;
    return maxId + 1;
};