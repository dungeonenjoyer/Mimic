const EntityArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand");

let killed = false

register("tick", () => {
    if (killed) return;
    const entity = World.getAllEntitiesOfType(EntityArmorStand).find(entity => entity.getName().includes("§c§lMimic§r §e0§c❤"));
    if (entity == null) return;
    killed = true
    ChatLib.say("/pc Mimic Killed!");
});

register("worldunload", () => {
    killed = false;
});