import { world, system } from "@minecraft/server";

// List of dialog scene keys (defined in npc_dialogue.json)
const dialogScenes = [
  "npc_dialog_1",
  "npc_dialog_2",
  "npc_dialog_3",
  "npc_dialog_4",
  "npc_dialog_5",
  "npc_dialog_6",
  "npc_dialog_7",
  "npc_dialog_8",
  "npc_dialog_9",
  "npc_dialog_10",
  "npc_dialog_11",
  "npc_dialog_12",
  "npc_dialog_13",
  "npc_dialog_14",
  "npc_dialog_15",
  "npc_dialog_16",
  "npc_dialog_17",
  "npc_dialog_18",
  "npc_dialog_19",
  "npc_dialog_20",
  "npc_dialog_21",
  "npc_dialog_22",
  "npc_dialog_23",
  "npc_dialog_24",
  "npc_dialog_25",
  "npc_dialog_26",
  "npc_dialog_27",
  "npc_dialog_28",
  "npc_dialog_29",
  "npc_dialog_30",
  "npc_dialog_31",
  "npc_dialog_32",
  "npc_dialog_33",
  "npc_dialog_34",
  "npc_dialog_35",
  "npc_dialog_36",
  "npc_dialog_37",
  "npc_dialog_38",
  "npc_dialog_39",
  "npc_dialog_40",
  "npc_dialog_41",
  "npc_dialog_42",
  "npc_dialog_43",
  "npc_dialog_44",
  "npc_dialog_45",
  "npc_dialog_46",
  "npc_dialog_47",
  "npc_dialog_48",
  "npc_dialog_49",
  "npc_dialog_50"
];


world.afterEvents.entityHitEntity.subscribe(() => {}); // keep script alive

world.beforeEvents.playerInteractWithEntity.subscribe((event) => {
  const entity = event.target;
  console.log(`Player interacted with entity of type: ${entity.typeId}`);
  if (entity.typeId !== "minecraft:npc") return;

  const player = event.player;

  // Pick a random scene
  const randomScene = dialogScenes[Math.floor(Math.random() * dialogScenes.length)];
  console.log(`Selected random scene: ${randomScene}`);
  // Open the dialogue scene for the player
  system.run(() => {
    player.runCommand(`dialogue open @e[type=npc,r=2] @s ${randomScene}`);
  });
});