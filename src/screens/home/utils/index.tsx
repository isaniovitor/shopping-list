export function Check(item, qtdItems, totalPrice, groceryList) {
  const newList = groceryList;
  let newQtd = 0;
  let newPrice = 0;

  newList.map(categoty => {
    if (categoty.name === item.category.name) {
      categoty.listItems.map(product => {
        // verifica se estar listado para fazer a soma
        if (product === item) {
          // categoty.listItems.pop(item);
          if (!product.isAdded) {
            newQtd = qtdItems + Number(product.amount);
            newPrice =
              totalPrice + Number(product.price) * Number(product.amount);
          } else {
            newQtd = qtdItems - Number(product.amount);
            newPrice =
              totalPrice - Number(product.price) * Number(product.amount);
          }

          product.isAdded = !product.isAdded;
        }
        return null;
      });
    }
    return null;
  });

  return { newList, newQtd, newPrice };
}

// renders
function renderProduct({ item }: any) {
  return (
    <Sty.ItemListConteiner>
      <Sty.TouchableOpacity onPress={() => console.log('clicou')}>
        <Sty.ImageItem source={{ uri: item.image_url }} />
        <Sty.ResumeItemContainer>
          <Sty.NameItem>{item.name}</Sty.NameItem>
          <Sty.PriceItem>{item.price} R$</Sty.PriceItem>
        </Sty.ResumeItemContainer>
      </Sty.TouchableOpacity>
      <Checkbox
        status={item.isAdded ? 'checked' : 'unchecked'}
        onPress={() => pressCheck(item)}
      />
    </Sty.ItemListConteiner>
  );
}

export function renderCategory({ item }: any) {
  return (
    <View>
      <Sty.HeaderList>{item.name}</Sty.HeaderList>
      <FlatList
        style={{ paddingTop: 20 }}
        data={item.listItems}
        extraData={item.listItems}
        renderItem={renderProduct}
        keyExtractor={(itemCategory: any, index: any) => index}
      />
    </View>
  );
}
