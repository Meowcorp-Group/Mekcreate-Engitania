// priority: 0

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

console.info('hi guys welcome back to another kubejs loading session');
console.info('                                            ,(##(,');
console.info('                                        /&&&&%((%&&&&/');
console.info('                                #&&%/(&&&&.        ,&&&.');
console.info('           %&&%.                  *#%%(.            ,&&#');
console.info('       .#&&&&&&&@,                                  /&@/');
console.info('     #&&@&&&&&&&&&,            ./&@&&&&&@&#*     ./&&&/');
console.info('  .%&&&/ #&&&&&&&&(         *&&&&&&&&&&&&&&&&&&&&&&&,');
console.info('  ,&&&&&&&&&&&&&&&&&#,  ,#&&&&&&&&&&&&&&&&&&&&&,');
console.info('     *(#&@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&(');
console.info('          ,&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&#');
console.info('          ,&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%.');
console.info('          ,&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&(');
console.info('          *&&&&&&&&&&&&&&&&&&&#.  /@&&&&&&&&&&&&&&(,');
console.info('         /&&&&&&&&&&&&&&@&/         (@&&&&&&&&&&&&&&.');
console.info('       /@&&&&%,.&&&&&&/               #&&&&&%  ,&&&&.');
console.info('     *&&&&%.     &&&&&/                .&&&&%   /@&&.');
console.info(',&&&&&@#         .&&&&/                ,@&&&,   *&&&.');
console.info('                 /&&&&/           .%&%&&&#');
console.info('thanks guys for listening to this kubejs loading session');

onEvent('recipes', (event) => {
	// Mekanism infusing recipes
	event.recipes.mekanismMetallurgicInfusing(
		'plane:diamond_reinforced_iron',
		'2x minecraft:iron_ingot',
		'44x mekanism:diamond',
		440
	);
	event.recipes.mekanismMetallurgicInfusing(
		'thermal:electrum_ingot',
		'thermal:silver_ingot',
		'mekanism:gold',
		10
	);
	event.recipes.mekanismMetallurgicInfusing(
		'thermal:bronze_dust',
		'3x thermal:copper_dust',
		'mekanism:tin',
		10
	);

	// coals to sulfur
    event.recipes.custom({
        type: 'mekanism:reaction',
        itemInput: {
            ingredient: {
                tag: 'minecraft:coals',
            },
        },
        fluidInput: {
            amount: 100,
            tag: 'minercraft:water',
        },

        gasInput: {
            amount: 100,
            gas: 'mekanism:oxygen',
        },

        duration: 100,
        itemOutput: {
            item: 'thermal:sulfur_dust',
        },

        gasOutput: {
            amount: '100',
            gas: 'mekanism:hydrogen',
        },
    });

    // coal blocks to sulfur
    event.recipes.custom({
        type: 'mekanism:reaction',
        itemInput: {
            ingredient: [
                { tag: 'forge:storage_blocks/coal' },
                { tag: 'forge:storage_blocks/charcoal' },
            ],
        },
        fluidInput: {
            amount: 1000,
            tag: 'minercraft:water',
        },

        gasInput: {
            amount: 1000,
            gas: 'mekanism:oxygen',
        },

        duration: 900,
        itemOutput: {
            item: 'thermal:sulfur_dust',
        },

        gasOutput: {
            amount: '1000',
            gas: 'mekanism:hydrogen',
        },
    });

    // coal dust to sulfur
    event.recipes.custom({
        type: 'mekanism:reaction',
        itemInput: {
            ingredient: [
                { tag: 'forge:dusts/coal' },
                { tag: 'forge:dusts/charcoal' },
            ],
        },
        fluidInput: {
            amount: 100,
            tag: 'minercraft:water',
        },

        gasInput: {
            amount: 100,
            gas: 'mekanism:oxygen',
        },

        duration: 100,
        itemOutput: {
            item: 'thermal:sulfur_dust',
        },

        gasOutput: {
            amount: '100',
            gas: 'mekanism:hydrogen',
        },
    });

	// Mekanism Sawing Recipes

    event.recipes.mekanismSawing(
		'#minecraft:planks',
		'6x minecraft:stick',
		Item.of('thermal:sawdust').chance(0.25)
	);

	event.recipes.mekanismSawing(
		'#minecraft:wooden_slabs',
        '3x minecraft:stick',
		Item.of('thermal:sawdust').chance(0.13)
	);

	event.recipes.mekanismSawing(
		'#minecraft:oak_logs',
		'6x minecraft:oak_planks',
		Item.of('thermal:sawdust').chance(0.25)
	);

	event.recipes.mekanismSawing(
		'#minecraft:birch_logs',
		'6x minecraft:birch_planks',
		Item.of('thermal:sawdust').chance(0.25)
	);

	event.recipes.mekanismSawing(
		'#minecraft:spruce_logs',
		'6x minecraft:spruce_planks',
		Item.of('thermal:sawdust').chance(0.25)
	);

	event.recipes.mekanismSawing(
		'#minecraft:jungle_logs',
		'6x minecraft:jungle_planks',
		Item.of('thermal:sawdust').chance(0.25)
	);

	event.recipes.mekanismSawing(
		'#minecraft:acacia_logs',
		'6x minecraft:acacia_planks',
		Item.of('thermal:sawdust').chance(0.25)
	);

	event.recipes.mekanismSawing(
		'#minecraft:dark_oak_logs',
		'6x minecraft:dark_oak_planks',
		Item.of('thermal:sawdust').chance(0.25)
	);

	event.recipes.mekanismSawing(
		'#minecraft:warped_stems',
		'6x minecraft:_planks',
		Item.of('thermal:sawdust').chance(0.25)
	);
	
	event.recipes.mekanismSawing(
		'#minecraft:crimson_stems',
		'6x minecraft:crimson_planks',
		Item.of('thermal:sawdust').chance(0.25)
	);

	// Create mixing recipes
	event.recipes
		.createMixing('4x thermal:bronze_ingot', [
			'3x minecraft:copper_ingot',
			'thermal:tin_ingot',
		])
		.heated();

	event.recipes
		.createMixing('3x thermal:invar_ingot', [
			'2x minecraft:iron_ingot',
			'thermal:nickel_ingot',
		])
		.heated();

	event.recipes
		.createMixing('2x thermal:electrum_ingot', [
			'minecraft:gold_ingot',
			'thermal:silver_ingot',
		])
		.heated();

	event.recipes
		.createMixing('2x thermal:constantan_ingot', [
			'minecraft:copper_ingot',
			'thermal:nickel_ingot',
		])
		.heated();

	event.recipes
		.createMixing('4x thermal:signalum_ingot', [
			'3x minecraft:copper_ingot',
			'thermal:silver_ingot',
			'4x minecraft:redstone',
		])
		.heated();

	event.recipes
		.createMixing('4x thermal:lumium_ingot', [
			'3x thermal:tin_ingot',
			'thermal:silver_ingot',
			'2x minecraft:glowstone_dust',
		])
		.heated();

	event.recipes
		.createMixing('4x thermal:enderium_ingot', [
			'3x thermal:lead_ingot',
			'thermal:diamond_dust',
			'#forge:ender_pearls',
		])
		.heated();

	event.recipes
		.createMixing('create:rose_quartz', [
			'minecraft:quartz',
			Fluid.of('thermal:redstone', 800)
		])
		.heated();

	event.recipes.createMixing('thermal:signalum_dust', [
		'3x thermal:copper_dust',
		'thermal:silver_dust',
		Fluid.of('thermal:redstone', 400)
	]);

	// Create Pressing recipes

	event.recipes.createPressing('thermal:iron_plate', [
        'minecraft:iron_ingot'
	]);

	event.recipes.createPressing('thermal:gold_plate', [
        'minecraft:gold_ingot'
	]);

	event.recipes.createPressing('thermal:copper_plate', [
        'minecraft:copper_ingot'
	]);

	event.recipes.createPressing('thermal:lead_plate', [
        'minecraft:lead_ingot'
	]);

	event.recipes.createPressing('thermal:nickel_plate', [
        'minecraft:nickel_ingot'
	]);

	event.recipes.createPressing('thermal:silver_plate', [
        'minecraft:silver_ingot'
	]);

	event.recipes.createPressing('thermal:_plate', [
        'minecraft:_ingot'
	]);

	// Thermal Induction Smelter recipes

	event.recipes.thermalSmelter('2x create:brass_ingot', [
		'minecraft:copper_ingot',
		'create:zinc_ingot',
	]);

    

// removed recipes here
	
	// Immersive Engineering

	//input
	event.remove({input: 'immersiveengineering:ingot_constantan'});
	event.remove({input: 'immersiveengineering:ingot_electrum'});
	event.remove({input: 'immersiveengineering:ingot_nickel'});
	event.remove({input: 'immersiveengineering:ingot_silver'});
	event.remove({input: 'immersiveengineering:ingot_lead'});
	event.remove({input: 'immersiveengineering:ingot_uranium'});
	event.remove({input: 'immersiveengineering:nugget_constantan'})
	event.remove({input: 'immersiveengineering:nugget_electrum'})
	event.remove({input: 'immersiveengineering:nugget_nickel'})
	event.remove({input: 'immersiveengineering:nugget_silver'})
	event.remove({input: 'immersiveengineering:nugget_lead'})
	event.remove({input: 'immersiveengineering:nugget_uranium'})
	event.remove({input: 'immersiveengineering:plate_lead'})
    event.remove({input: 'immersiveengineering:plate_silver'})
    event.remove({input: 'immersiveengineering:plate_nickel'})	
    event.remove({input: 'immersiveengineering:plate_constantan'})
    event.remove({input: 'immersiveengineering:plate_electrum'})
    event.remove({input: 'immersiveengineering:plate_steel'})
    event.remove({input: 'immersiveengineering:plate_gold'})
    event.remove({input: 'immersiveengineering:plate_iron'})
	event.remove({input: 'immersiveengineering:raw_nickel'})
	event.remove({input: 'immersiveengineering:raw_silver'});
	event.remove({input: 'immersiveengineering:raw_lead'});
	event.remove({input: 'immersiveengineering:raw_uranium'});
	event.remove({input: 'immersiveengineering:raw_block_nickel'});
	event.remove({input: 'immersiveengineering:raw_block_silver'});
	event.remove({input: 'immersiveengineering:raw_block_lead'});
	event.remove({input: 'immersiveengineering:raw_block_uranium'});
	event.remove({input: 'immersiveengineering:dust_iron'});
	event.remove({input: 'immersiveengineering:dust_copper'});
	event.remove({input: 'immersiveengineering:dust_gold'});
	event.remove({input: 'immersiveengineering:dust_uranium'});
	event.remove({input: 'immersiveengineering:dust_nickel'});
	event.remove({input: 'immersiveengineering:dust_lead'});
	event.remove({input: 'immersiveengineering:dust_silver'});
	event.remove({input: 'immersiveengineering:dust_constantan'});
	event.remove({input: 'immersiveengineering:dust_electrum'});
	event.remove({input: 'immersiveengineering:dust_steel'});
	event.remove({input: 'immersiveengineering:dust_wood'});
	event.remove({input: 'immersiveengineering:dust_sulfur'});
	event.remove({input: 'immersiveengineering:dust_saltpeter'});
    
	//output
	event.remove({output: 'immersiveengineering:ingot_constantan'});
	event.remove({output: 'immersiveengineering:ingot_electrum'});
	event.remove({output: 'immersiveengineering:ingot_nickel'});
	event.remove({output: 'immersiveengineering:ingot_silver'});
	event.remove({output: 'immersiveengineering:ingot_lead'});
	event.remove({output: 'immersiveengineering:ingot_uranium'});
	event.remove({output: 'immersiveengineering:plate_lead'})
    event.remove({output: 'immersiveengineering:plate_silver'})
    event.remove({output: 'immersiveengineering:plate_nickel'})	
    event.remove({output: 'immersiveengineering:plate_constantan'})
    event.remove({output: 'immersiveengineering:plate_electrum'})
    event.remove({output: 'immersiveengineering:plate_steel'})
    event.remove({output: 'immersiveengineering:plate_gold'})
    event.remove({output: 'immersiveengineering:plate_iron'})
	event.remove({output: 'immersiveengineering:raw_nickel'})
	event.remove({output: 'immersiveengineering:raw_silver'});
	event.remove({output: 'immersiveengineering:raw_lead'});
	event.remove({output: 'immersiveengineering:raw_uranium'});
	event.remove({output: 'immersiveengineering:raw_block_nickel'});
	event.remove({output: 'immersiveengineering:raw_block_silver'});
	event.remove({output: 'immersiveengineering:raw_block_lead'});
	event.remove({output: 'immersiveengineering:raw_block_uranium'});
	event.remove({output: 'immersiveengineering:dust_iron'});
	event.remove({output: 'immersiveengineering:dust_copper'});
	event.remove({output: 'immersiveengineering:dust_gold'});
	event.remove({output: 'immersiveengineering:dust_uranium'});
	event.remove({output: 'immersiveengineering:dust_nickel'});
	event.remove({output: 'immersiveengineering:dust_lead'});
	event.remove({output: 'immersiveengineering:dust_silver'});
	event.remove({output: 'immersiveengineering:dust_constantan'});
	event.remove({output: 'immersiveengineering:dust_electrum'});
	event.remove({output: 'immersiveengineering:dust_steel'});
	event.remove({output: 'immersiveengineering:dust_wood'});
	event.remove({output: 'immersiveengineering:dust_sulfur'});
	event.remove({output: 'immersiveengineering:dust_saltpeter'});

	// Mekanism

    //input
	event.remove({input: 'mekanism:tin_ingot'});
	event.remove({input: 'mekanism:lead_ingot'});
	event.remove({input: 'mekanism:bronze_ingot'});
	event.remove({input: 'mekanism:nugget_tin'})
    event.remove({input: 'mekanism:nugget_lead'})
    event.remove({input: 'mekanism:nugget_bronze'})
	event.remove({input: 'mekanism:raw_tin'});
	event.remove({input: 'mekanism:raw_lead'});
	event.remove({input: 'mekanism:block_raw_tin'});
	event.remove({input: 'mekanism:block_raw_lead'});
	event.remove({input: 'mekanism:sawdust'});
	event.remove({input: 'mekanism:dust_iron'});
	event.remove({input: 'mekanism:dust_gold'});
	event.remove({input: 'mekanism:dust_copper'});
	event.remove({input: 'mekanism:dust_tin'});
	event.remove({input: 'mekanism:dust_lapis_lazuli'});
	event.remove({input: 'mekanism:dust_quartz'});
	event.remove({input: 'mekanism:dust_diamond'});
	event.remove({input: 'mekanism:dust_emerald'});
	event.remove({input: 'mekanism:dust_netherite'});
	event.remove({input: 'mekanism:dust_bronze'});
	event.remove({input: 'mekanism:dust_sulfur'});

	//output
	event.remove({output: 'mekanism:tin_ingot'});
	event.remove({output: 'mekanism:lead_ingot'});
	event.remove({output: 'mekanism:bronze_ingot'});
	event.remove({output: 'mekanism:nugget_tin'})
    event.remove({output: 'mekanism:nugget_lead'})
    event.remove({output: 'mekanism:nugget_bronze'})
	event.remove({output: 'mekanism:raw_tin'});
	event.remove({output: 'mekanism:raw_lead'});
	event.remove({output: 'mekanism:block_raw_tin'});
	event.remove({output: 'mekanism:block_raw_lead'});
	event.remove({output: 'mekanism:sawdust'});
	event.remove({output: 'mekanism:dust_iron'});
	event.remove({output: 'mekanism:dust_gold'});
	event.remove({output: 'mekanism:dust_copper'});
	event.remove({output: 'mekanism:dust_tin'});
	event.remove({output: 'mekanism:dust_lapis_lazuli'});
	event.remove({output: 'mekanism:dust_quartz'});
	event.remove({output: 'mekanism:dust_diamond'});
	event.remove({output: 'mekanism:dust_emerald'});
	event.remove({output: 'mekanism:dust_netherite'});
	event.remove({output: 'mekanism:dust_bronze'});
	event.remove({output: 'mekanism:dust_sulfur'});
    
	// Lazier AE2

	event.remove({input: 'lazierae2:coal_dust'});
	event.remove({output: 'lazierae2:coal_dust'});

	// Create

	//input
    event.remove({input: 'create:copper_nugget'});
	
    //output
	event.remove({output: 'create;copper_nugget'});

});

// its mket time