import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components/native';

import type { CategoryProps } from '~/@types/entities/Category';

import * as S from './styles';

interface Props {
  itemSelect: any;
  setItem: (item: any) => void;
  categories: CategoryProps[];
  disabled: boolean;
}

export function Picker({ itemSelect, setItem, categories, disabled }: Props) {
  const [showList, setShowList] = useState(false);
  const { Colors } = useContext(ThemeContext);

  const selectItem = (item: any) => {
    setItem(item);
    setShowList(false);
  };

  const renderItems = (item: CategoryProps) => {
    return (
      <S.Touchable key={item.id} onPress={() => selectItem(item)}>
        <S.ContainerList>
          <S.TitleItem>{item.name}</S.TitleItem>
        </S.ContainerList>
      </S.Touchable>
    );
  };

  return (
    <S.Container>
      <S.ContainerPicker>
        <S.Touchable disabled={disabled} onPress={() => setShowList(!showList)}>
          <S.PlaceholderText>
            {itemSelect || 'Selecione a categoria'}
          </S.PlaceholderText>
          <S.IconPicker
            color={Colors.TEXT_CLICKABLE}
            size={20}
            type="font-5"
            name={showList ? 'angle-up' : 'angle-down'}
          />
        </S.Touchable>

        {showList && (
          <>
            {categories.map(category => {
              return renderItems(category);
            })}
          </>
        )}
      </S.ContainerPicker>
    </S.Container>
  );
}

export default Picker;

// import { Picker } from '@react-native-picker/picker';
// import React, { useState } from 'react';
// import { View } from 'react-native';

// import { mockCategory } from './mock';

// import { styles } from './styles';

// interface DropProps {
//   label?: string;
//   dropWidth: number;
// }

// const DropDwon: React.FC<DropProps> = ({ label, dropWidth }) => {
//   const [selectedValue, setSelectedValue] = useState('');
//   return (
//     <View style={styles.container}>
//       <Picker
//         selectedValue={selectedValue}
//         style={{ height: 46, width: dropWidth }}
//         onValueChange={setSelectedValue}
//       >
//         {mockCategory.map(category => {
//           return (
//             <Picker.Item
//               label={category.name}
//               value={category.name}
//               key={category.id}
//             />
//           );
//         })}
//       </Picker>
//     </View>
//   );
// };

// export default DropDwon;
// // import React, { useState } from 'react';
// // import DropDownPicker from 'react-native-dropdown-picker';
// // import { listCategory } from '~/screens/home/mock';

// // interface DropProps {
// //   label?: string;
// // }

// // const DropDwon: React.FC<DropProps> = ({ label, ...rest }) => {
// //   const [open, setOpen] = useState(false);
// //   const [value, setValue] = useState(null);

// //   const [items, setItems] = useState([
// //     { label: 'Limpeza', value: 'Limpeza' },
// //     { label: 'Carnes', value: 'Carnes' },
// //     { label: 'Frutas', value: 'Frutas' },
// //   ]);

// //   return (
// //     <DropDownPicker
// //       listParentContainerStyle={{
// //         borderColor: '#444444',
// //         borderWidth: 1,
// //       }}
// //       style={{
// //         borderWidth: 0,
// //         borderBottomWidth: 3,
// //         borderBottomColor: '#444444',
// //       }}
// //       textStyle={{
// //         fontSize: 14,
// //         color: '#333',
// //       }}
// //       placeholder={`Selecione a ${label}`}
// //       open={open}
// //       value={value}
// //       items={items}
// //       setOpen={setOpen}
// //       setValue={setValue}
// //       setItems={setItems}
// //     />
// //   );
// // };

// // export default DropDwon;
