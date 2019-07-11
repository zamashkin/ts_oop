export { };

class Entity {
    private maxHp: number;
    private currentHp: number;
    private name: string;
    private skills: Array<string>;
    private items: Array<string>;
    private attackPower: number;
    constructor(maxHp: number, name: string, skills: Array<string>, items: Array<string>, attackPower: number) {
        this.maxHp = maxHp;
        this.currentHp = maxHp;
        this.name = name;
        this.skills = skills.map((i) => i.toLowerCase())
        this.items = this.addItem(items)
        this.attackPower = attackPower;
    };

    private addItem(items: Array<string>) {  //В дочерних при вызове нужна проверка количесва предметов 
        let itemsArray = []
        for (let i = 0; i < items.length; i++) {
            let itemName = items[i].toLowerCase()
            switch (itemName) {
                case 'топор':
                    this.attackPower += 15;
                    itemsArray.push(itemName);
                    break;
                case 'посох':
                    //реализация метода;    
                    itemsArray.push(itemName);
                case 'Кольцо':
                    this.maxHp += 30;
                    this.currentHp += 30;
                    itemsArray.push(itemName);
                default:
                    throw new Error('No item founded with name ' + itemName)

            }

        }
        return itemsArray
    }

    private skillsList(skillName: string) {
        switch (skillName.toLowerCase()){
            case 'атака':
                // реализация атаки
                break;
            case 'ярость':
                // реализация ярости
                break;
        }
    }

    public useSkill(skillName: string) {
        if (this.skills.includes(skillName.toLowerCase())) {
            this.skillsList(skillName)
        } else {
            throw new Error('This Entity dont have this skill')
        }
    }
}



class Hero extends Entity {
    constructor(maxHp: number, name: string, skills: Array<string>, items: Array<string>, attackPower: number) {
        if (items.length > 2) {
            throw new Error('Hero can have a maximum of two weapons');
        } else {
            super(maxHp, name, skills, items, attackPower);
        }
    }
}

class Creature extends Entity {
    constructor(maxHp: number, name: string, skills: Array<string>, items: Array<string>, attackPower: number) {
        if (items.length > 1) {
            throw new Error('Creature can have a maximum of one weapon');
        } else {
            super(maxHp, name, skills, items, attackPower);
        }
    }
}
