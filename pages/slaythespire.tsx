import React, { useState, useEffect } from "react"
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const Page = (props) => {
  const [originItem, setOriginItem] = useState("")
  const [newItem, setNewItem] = useState("")
  const [gold, setGold] = useState(0)
  const [check_uncommon, setCheck_uncommon] = useState(true)
  const [check_common, setCheck_common] = useState(true)
  const [check_boss, setCheck_boss] = useState(true)
  const [check_shop, setCheck_shop] = useState(true)
  const [check_rare, setCheck_rare] = useState(true)
  const [check_relics, setCheck_relics] = useState(true)

  useEffect(() => {
    setOriginItem("{\n}")
  }, [])

  const test = () => {
    let {
      uncommon_relics,
      relics,
      rare_relics,
      common_relics,
      boss_relics,
      shop_relics,
      ...mockData_others
    } = mockData

    const newObj = JSON.parse(originItem)
    newObj.gold = gold
    if (check_uncommon) {
      newObj.uncommon_relics = [
        ...uncommon_relics,
        ...(newObj.uncommon_relics ?? []),
        "Teardrop Locket",
        "Paper Krane",
        "Paper Phrog",
      ]
    }
    if (check_relics) {
      newObj.relics = [
        ...relics,
        ...(newObj.relics ?? []),
        "Golden Idol",
        // 'Golden Idol (Relic)',
        "Necronomicon",
        "Odd Mushroom",
        "Red Mask",
        "Ssserpent Head",
        "Warped Tongs",
      ]
    }
    if (check_rare) {
      newObj.rare_relics = [
        ...rare_relics,
        ...(newObj.rare_relics ?? []),
        "Calipers",
        "Dead Branch",
        "Ginger",
        "Ice Cream",
        "Lizard Tail",
        "Peace Pipe",
        "Prayer Wheel",
        "Shovel",
        "Wing Boots",
        "Unceasing Top",
        "Turnip",
      ]
    }
    if (check_common) {
      newObj.common_relics = [
        ...common_relics,
        ...(newObj.common_relics ?? []),
        //
      ]
    }
    if (check_boss) {
      newObj.boss_relics = [
        ...boss_relics,
        ...(newObj.boss_relics ?? []),
        "Black Star",
        "Sozu",
        "Sacred Bark",
        "Runic Pyramid",
        "Runic Cube",
        "Ring of the Serpent",
        "Violet Lotus",
        "Holy Water",
      ]
    }
    if (check_shop) {
      newObj.shop_relics = [
        ...shop_relics,
        ...(newObj.shop_relics ?? []),
        "Chemical X",
        "Clockwork Souvenir",
        "Membership Card",
        "Strange Spoon",
        "Prismatic Shard",
        "Melange",
      ]
    }
    setNewItem(JSON.stringify(newObj, null, 2))
    console.log("New Item: ", newObj)
  }
  const handleOriginChange = (e) => {
    // console.log('e: ', e)
    setOriginItem(e.target.value)
    try {
      const newObj = JSON.parse(e.target.value)
      setGold(newObj.gold ?? 0)
    } catch (error) {
      // console.log('Error: ', error)
    }
  }
  return (
    <>
      <style jsx>{`
        .v-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          margin: 20px;
          justify-content: stretch;
          align-items: stretch;
          align-content: stretch;
        }
        .v-left,
        .v-middle,
        .v-right {
          display: flex;
          justify-content: stretch;
          /* flex-wrap: wrap; */
          flex-direction: column;
          align-items: stretch;
          // height: 100vh;
        }
        .v-left,
        .v-right {
          flex: 1 1;
        }
        .v-middle button {
          flex: 1 1;
        }
        .v-middle input[type="text"] {
          width: 70px;
        }
        .v-checkItem {
          text-align: right;
        }
        #originItem,
        #newItem {
          display: block;
          border: 1px solid red;
        }
        textarea {
          flex: 1 1;
        }
      `}</style>
      <div className="v-wrapper">
        <div className="v-left">
          {/* <label>Origin Item: </label> */}
          <textarea
            name="originItem"
            id="originItem"
            cols="30"
            rows="30"
            placeholder="Origin Item here..."
            value={originItem}
            onChange={handleOriginChange}
          ></textarea>
        </div>
        <div className="v-middle">
          <label htmlFor="gold">Gold:</label>
          <input
            type="text"
            id="gold"
            value={gold}
            onChange={(e) => setGold(parseInt(e.target.value) || 0)}
          />
          <div className="v-checkItem">
            <label htmlFor="allChecked">allChecked:</label>
            <input
              type="checkbox"
              name="allChecked"
              id="allChecked"
              // checked={check_uncommon}
              onChange={(e) => {
                const checked = e.target.checked
                setCheck_uncommon(checked)
                setCheck_common(checked)
                setCheck_boss(checked)
                setCheck_shop(checked)
                setCheck_rare(checked)
                setCheck_relics(checked)
              }}
            />
          </div>
          <div className="v-checkItem">
            <label htmlFor="uncommon">uncommon:</label>
            <input
              type="checkbox"
              name="uncommon"
              id="uncommon"
              checked={check_uncommon}
              onChange={(e) => setCheck_uncommon(e.target.checked)}
            />
          </div>
          <div className="v-checkItem">
            <label htmlFor="common">common:</label>
            <input
              type="checkbox"
              name="common"
              id="common"
              checked={check_common}
              onChange={(e) => setCheck_common(e.target.checked)}
            />
          </div>
          <div className="v-checkItem">
            <label htmlFor="boss">boss:</label>
            <input
              type="checkbox"
              name="boss"
              id="boss"
              checked={check_boss}
              onChange={(e) => setCheck_boss(e.target.checked)}
            />
          </div>
          <div className="v-checkItem">
            <label htmlFor="shop">shop:</label>
            <input
              type="checkbox"
              name="shop"
              id="shop"
              checked={check_shop}
              onChange={(e) => setCheck_shop(e.target.checked)}
            />
          </div>
          <div className="v-checkItem">
            <label htmlFor="rare">rare:</label>
            <input
              type="checkbox"
              name="rare"
              id="rare"
              checked={check_rare}
              onChange={(e) => setCheck_rare(e.target.checked)}
            />
          </div>
          <div className="v-checkItem">
            <label htmlFor="relics">relics:</label>
            <input
              type="checkbox"
              name="relics"
              id="relics"
              checked={check_relics}
              onChange={(e) => setCheck_relics(e.target.checked)}
            />
          </div>
          <button onClick={test}>Convert</button>
        </div>
        <div className="v-right">
          {/* <label>New Item: </label> */}
          <textarea
            name="newItem"
            id="newItem"
            cols="30"
            placeholder="New Item here..."
            // rows="50"
            value={newItem}
            disabled
          ></textarea>
        </div>
      </div>
    </>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = "📌 Page - PAGE"

export default Page

const mockData = {
  shuffle_seed_count: 0,
  metric_purchased_purges: 0,
  metric_path_per_floor: [],
  monster_list: [
    "2 Louse",
    "Small Slimes",
    "Jaw Worm",
    "2 Fungi Beasts",
    "Looter",
    "Exordium Thugs",
    "3 Louse",
    "Red Slaver",
    "2 Fungi Beasts",
    "Gremlin Gang",
    "Looter",
    "Exordium Wildlife",
    "Large Slime",
    "Looter",
    "2 Fungi Beasts",
    "Exordium Thugs",
  ],
  metric_potions_floor_spawned: [],
  daily_mods: ["Allstar", "Hoarder", "Midas"],
  metric_campfire_choices: [],
  is_ascension_mode: false,
  metric_items_purchased: [],
  is_endless_mode: false,
  merchant_seed_count: 0,
  floor_num: 1,
  uncommon_relics: [
    "Darkstone Periapt",
    "Bottled Lightning",
    "Frozen Egg 2",
    "Yang",
    "Molten Egg 2",
    "Question Card",
    "HornCleat",
    "Letter Opener",
    "InkBottle",
    "Ornamental Fan",
    "StrikeDummy",
    "Toxic Egg 2",
    "White Beast Statue",
    "Mercury Hourglass",
    "Meat on the Bone",
    "Shuriken",
    "Pantograph",
    "Mummified Hand",
    "Eternal Feather",
    "The Courier",
    "Kunai",
    "Matryoshka",
    "Singing Bowl",
    "Bottled Tornado",
    "TeardropLocket",
    "Bottled Flame",
    "Blue Candle",
    "Sundial",
    "Pear",
    "Gremlin Horn",
  ],
  post_combat: false,
  combo: false,
  relics: [
    "PureWater",
    "Ring of the Snake",
    "Smiling Mask",
    "Paper Frog",
    "Paper Crane",
    "Discerning Monocle",
    "Champion Belt",
    "Nloth's Gift",
    "Black Blood",
    // /// common
    // "Tiny Chest",
    // "Lantern",
    // "Juzu Bracelet",
    // "Dream Catcher",
    // "Bag of Preparation",
    // "Bag of Marbles",
    // /// uncommon
    // "Singing Bowl",
    // "Mummified Hand",
    // "The Courier",
    // /// rare
    // "Prayer Wheel",
    // "Unceasing Top",
    // "Shovel",
    // "Peace Pipe",
    // "Ice Cream",
    // "Dead Branch",
    // "Calipers",
    // /// shop
    // "Membership Card",
    // "Strange Spoon",
    // /// boss
    // "Ring of the Serpent",
    // "Runic Pyramid",
    // "Black Star",

    // "Golden Idol",
    // "Odd Mushroom",
  ],
  rare_relics: [
    "CaptainsWheel",
    "Mango",
    // "Dead Branch",
    // "Ginger",
    // "Shovel",
    "Old Coin",
    "StoneCalendar",
    "FossilizedHelix",
    // "Ice Cream",
    "Thread and Needle",
    // "Peace Pipe",
    "CloakClasp",
    "TungstenRod",
    "Pocketwatch",
    "Gambling Chip",
    // "Turnip",
    // "Prayer Wheel",
    // "Unceasing Top",
    // "Lizard Tail",
    "WingedGreaves",
    "Torii",
    "Du-Vu Doll",
    "Incense Burner",
    // "Calipers",
    "Girya",
    "GoldenEye",
    "Bird Faced Urn",
  ],
  level_name: "Exordium",
  metric_campfire_rested: 0,
  max_orbs: 0,
  boss: "Hexaghost",
  seed: 6282479434097199000,
  metric_current_hp_per_floor: [],
  current_health: 72,
  common_relics: [
    "Strawberry",
    "Regal Pillow",
    "Toy Ornithopter",
    "Centennial Puzzle",
    "Vajra",
    "Potion Belt",
    "Damaru",
    "Orichalcum",
    "Nunchaku",
    "CeramicFish",
    "Pen Nib",
    "Blood Vial",
    "Lantern",
    "War Paint",
    "Happy Flower",
    "MealTicket",
    "Bag of Marbles",
    "Omamori",
    "Anchor",
    "Akabeko",
    "Bronze Scales",
    "Whetstone",
    "MawBank",
    "Ancient Tea Set",
    "Boot",
    "Oddly Smooth Stone",
    "Tiny Chest",
    "Dream Catcher",
    "Art of War",
    "PreservedInsect",
    "Juzu Bracelet",
    "Bag of Preparation",
  ],
  monsters_killed: 0,
  gold: 99,
  neow_bonus: "",
  card_random_seed_count: 0,
  card_seed_count: 10,
  is_daily: true,
  metric_campfire_rituals: 0,
  metric_card_choices: [],
  metric_potions_obtained: [],
  is_final_act_on: false,
  treasure_seed_count: 0,
  metric_event_choices: [],
  current_room: "com.megacrit.cardcrawl.rooms.MonsterRoom",
  has_emerald_key: false,
  boss_relics: [
    "Snecko Eye",
    "Tiny House",
    // "Black Star",
    "Cursed Key",
    "Calling Bell",
    "Runic Dome",
    "Pandora's Box",
    "HolyWater",
    "Empty Cage",
    "Astrolabe",
    // "Sozu",
    // "SacredBark",
    // "Runic Pyramid",
    "SlaversCollar",
    "Philosopher's Stone",
    "Fusion Hammer",
    "Ectoplasm",
    "Velvet Choker",
    "VioletLotus",
    "Busted Crown",
    "Coffee Dripper",
  ],
  blue: 0,
  path_y: [0],
  path_x: [0],
  metric_item_purchase_floors: [],
  gold_gained: 0,
  ascension_level: 0,
  one_time_event_list: [
    "Accursed Blacksmith",
    "Bonfire Elementals",
    "Designer",
    "Duplicator",
    "FaceTrader",
    "Fountain of Cleansing",
    "Knowing Skull",
    "Lab",
    "N'loth",
    "SecretPortal",
    "The Joust",
    "WeMeetAgain",
    "The Woman in Blue",
  ],
  card_random_seed_randomizer: 5,
  metric_campfire_meditates: 0,
  perfect: 0,
  mugged: false,
  metric_build_version: "2022-12-18",
  event_list: [
    "Big Fish",
    "The Cleric",
    "Dead Adventurer",
    "Golden Idol",
    "Golden Wing",
    "World of Goop",
    "Liars Game",
    "Living Wall",
    "Mushrooms",
    "Scrap Ooze",
    "Shining Light",
  ],
  elite_monster_list: [
    "3 Sentries",
    "Lagavulin",
    "3 Sentries",
    "Lagavulin",
    "Gremlin Nob",
    "3 Sentries",
    "Gremlin Nob",
    "Lagavulin",
    "Gremlin Nob",
    "Lagavulin",
  ],
  metric_seed_played: "6282479434097199189",
  red: 3,
  elites3_killed: 0,
  relic_counters: [-1],
  seed_set: false,
  elites2_killed: 0,
  metric_items_purged_floors: [],
  potion_seed_count: 0,
  blights: [],
  elites1_killed: 0,
  overkill: false,
  neow_cost: "",
  metric_floor_reached: 1,
  champions: 0,
  smoked: false,
  spirit_count: 0,
  special_seed: 19351,
  potion_chance: 0,
  shop_relics: [
    "Sling",
    "Lee's Waffle",
    "Frozen Eye",
    // "Membership Card",
    "Medical Kit",
    "Orrery",
    "ClockworkSouvenir",
    "TheAbacus",
    "OrangePellets",
    "Toolbox",
    // "Melange",
    // "Strange Spoon",
    "DollysMirror",
    "PrismaticShard",
    // "Chemical X",
    "HandDrill",
    "Cauldron",
  ],
  custom_mods: [],
  metric_path_taken: ["M"],
  name: "Damon",
  has_ruby_key: false,
  metric_playtime: 9,
  has_sapphire_key: false,
  is_trial: false,
  metric_max_hp_per_floor: [],
  save_date: 1671957290069,
  cards: [
    {
      upgrades: 0,
      misc: 0,
      id: "Strike_P",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Strike_P",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Strike_P",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Strike_P",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Defend_P",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Defend_P",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Defend_P",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Defend_P",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Eruption",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Vigilance",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Impatience",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Impatience",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Impatience",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Mayhem",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Mayhem",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Mayhem",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Swift Strike",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Swift Strike",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Swift Strike",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Mayhem",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Mayhem",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Mayhem",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Deep Breath",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Deep Breath",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Deep Breath",
    },
  ],
  endless_increments: [],
  metric_items_purged: [],
  purgeCost: 75,
  room_x: 0,
  blight_counters: [],
  room_y: 0,
  metric_gold_per_floor: [],
  metric_potions_floor_usage: [],
  boss_list: ["Hexaghost", "Slime Boss", "The Guardian"],
  ai_seed_count: 0,
  event_chances: [0, 0.1, 0.03, 0.02],
  metric_boss_relics: [],
  relic_seed_count: 5,
  act_num: 1,
  metric_damage_taken: [],
  green: 0,
  mystery_machine: 0,
  metric_campfire_upgraded: 0,
  potion_slots: 3,
  chose_neow_reward: false,
  event_seed_count: 0,
  metric_relics_obtained: [],
  daily_date: 19351,
  obtained_cards: {
    Impatience: 1,
    "Swift Strike": 1,
    "Deep Breath": 1,
    Mayhem: 2,
  },
  play_time: 9,
  hand_size: 5,
  max_health: 72,
  monster_seed_count: 35,
  potions: ["Potion Slot", "Potion Slot", "Potion Slot"],
}
