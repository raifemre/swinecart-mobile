
<View>
  <View style={container}>
    <Text style={[openSansBold, { fontSize: 20 }]}>{name}</Text>
    <Text style={[openSansBold, { fontSize: 16 }]}>Accreditation Number: {accreditation_no}</Text>
    <Text style={[openSansBold, { fontSize: 16 }]}>
      Date Evaluated: {moment(accreditation_date).format('MMMM YYYY')}
    </Text>
    <Text style={[openSansBold, { fontSize: 16 }]}>
      Expiry Date: {moment(accreditation_expiry).format('MMMM YYYY')}
    </Text>
    <Button
      block
      onPress={this.deleteFarm}
      style={[flatButton, { backgroundColor: '#EF5350', marginTop: 10 }]}
    >
      <Text uppercase={false} style={[openSansBold, { fontSize: 16 }]}>Delete Farm</Text>
    </Button>
  </View>
  <View style={[{ marginTop: 15 }]}>
    <Form>
      <FarmField
        farm={farm}
        label='Address Line 1* : Street, Road, Subdivision'
        field={'addressLine1'}
        isEditable={isEditable}
        keyboardType='default'
        isPicker={false}
      />
      <FarmField
        farm={farm}
        label='Address Line 2* : Barangay, Town, City'
        field={'addressLine2'}
        isEditable={isEditable}
        keyboardType='default'
        isPicker={false}
      />
      <FarmField
        farm={farm}
        label='Province'
        field={'province'}
        isEditable={isEditable}
        keyboardType='default'
        isPicker={true}
      />
      <FarmField
        farm={farm}
        label='Postal / Zip Code'
        field={'zipCode'}
        isEditable={isEditable}
        keyboardType='numeric'
        isPicker={false}
      />
      <FarmField
        farm={farm}
        label='Farm Type'
        field={'farmType'}
        isEditable={isEditable}
        keyboardType='default'
        isPicker={false}
      />
      <FarmField
        farm={farm}
        label='Farm Landline'
        field={'landline'}
        isEditable={isEditable}
        keyboardType='default'
        isPicker={false}
      />
      <FarmField
        farm={farm}
        label='Farm Mobile'
        field={'mobile'}
        isEditable={isEditable}
        keyboardType='default'
        isPicker={false}
      />
    </Form>
  </View>
  <View style={{ marginTop: 20 }}>
    <EditButton
      isEditable={isEditable}
      toggleisEditable={this.toggleisEditable}
      saveInfo={this.saveInfo}
      cancelEdit={this.cancelEdit}
    />
  </View>
</View>