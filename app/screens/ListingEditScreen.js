import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import listingsApi from "../api/listings";
import { CategoryPickerItem, UploadModal } from "../components";
import {
  Form,
  FormField,
  FormImagePicker,
  FormPicker,
  SubmitButton,
} from "../components/forms";
import { View } from "../components/styles";
import categories from "../data/categories";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least on image."),
});

const ListingEditScreen = ({ route }) => {
  const data = route?.params?.data;
  const inititalImages = data ? data : [];
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }

    resetForm();
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      extraScrollHeight={100}
      enableOnAndroid
      enableAutomaticScroll
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <View container>
        <UploadModal
          onDone={() => setUploadVisible(false)}
          progress={progress}
          visible={uploadVisible}
        />
        <Form
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
            images: inititalImages,
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormImagePicker name="images" data={data} />
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
    </KeyboardAwareScrollView>
  );
};

export default ListingEditScreen;
