import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View } from 'react-native';

import { mockCategory } from './mock';

import { styles } from './styles';

interface DropProps {
  label?: string;
  dropWidth: number;
}

const DropDwon: React.FC<DropProps> = ({ label, dropWidth }) => {
  const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 46, width: dropWidth }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {mockCategory.map(category => {
          return (
            <Picker.Item
              label={category.name}
              value={category.name}
              key={category.id}
            />
          );
        })}
      </Picker>
    </View>
  );
};

export default DropDwon;
// import React, { useState } from 'react';
// import DropDownPicker from 'react-native-dropdown-picker';
// import { listCategory } from '~/screens/home/mock';

// interface DropProps {
//   label?: string;
// }

// const DropDwon: React.FC<DropProps> = ({ label, ...rest }) => {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);

//   const [items, setItems] = useState([
//     { label: 'Limpeza', value: 'Limpeza' },
//     { label: 'Carnes', value: 'Carnes' },
//     { label: 'Frutas', value: 'Frutas' },
//   ]);

//   return (
//     <DropDownPicker
//       listParentContainerStyle={{
//         borderColor: '#444444',
//         borderWidth: 1,
//       }}
//       style={{
//         borderWidth: 0,
//         borderBottomWidth: 3,
//         borderBottomColor: '#444444',
//       }}
//       textStyle={{
//         fontSize: 14,
//         color: '#333',
//       }}
//       placeholder={`Selecione a ${label}`}
//       open={open}
//       value={value}
//       items={items}
//       setOpen={setOpen}
//       setValue={setValue}
//       setItems={setItems}
//     />
//   );
// };

// export default DropDwon;
