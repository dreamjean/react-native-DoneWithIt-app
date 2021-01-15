import React from "react";
import * as Yup from "yup";

import { CategoryPickerItem } from "../components";
import { Form, FormField, FormPicker, SubmitButton } from "../components/forms";
import ImageInput from "../components/ImageInput";
import { View } from "../components/styles";
import categories from "../data/categories";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const ListingEditScreen = ({ navigation }) => {
  return (
    <View container>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <ImageInput onPress={() => navigation.navigate("Media Selection")} />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <FormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLine={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </View>
  );
};

export default ListingEditScreen;
