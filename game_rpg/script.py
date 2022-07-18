class Player:
  def __init__(self, input_name, input_class, input_sex):
    self.name = input_name
    self.hero_class = input_class
    self.sex = input_sex
    self.level = 1
    self.hp = 20
    self.base_attack = 1
    self.is_dead = False
    self.items = {}
    self.pronoun = ''
    self.xp = 0
    if self.sex.lower() == 'm':
      self.pronoun = 'his'
    else:
      self.pronoun = 'her'
    
  def __repr__(self):
    description = 'The hero is a level {} {} and {} name is {}'.format(self.level, self.hero_class, self.pronoun, self.name)
    return description

  def level_up(self):
    self.level += 1
    self.base_attack += 1
    print('Paulo has reached level {}!'.format(self.level))

  def attack(self, enemy):
    print('You attacked {} for {} damage!'.format(enemy.name, self.base_attack))
    enemy.hp -= self.base_attack
    return

  def use_potion(self, potion):
    print('You used a potion and recovered {} HP!'.format(potion))
    print('Your current HP is {}'.format(self.hp))
    self.hp += potion.healing_points
    self.items.pop()

  def see_items(self):
    print('Items in the bag: {}'.format(self.items))

  def get_item(self, item):
    print(item)
    item_name = Item.name
    item_value = Item.healing_points
    self.items[item_name] = item_value 

class Item:
  def __init__(self, item_name, item_healing_points):
    self.name = item_name
    self.healing_points = item_healing_points
  def __repr__(self):
    print('This is a {}, and it recovers {} HP'.format(self.name, self.healing_points))
    return

new_hero = Player('Paulo', 'Paladin', 'm')
new_item = Item('Healing Herb', 20)
# print(new_hero)
new_hero.get_item(new_item)
# new_hero.see_items()
# new_hero.use_potion(new_item)
# new_hero.level_up()