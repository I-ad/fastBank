import React, {Component} from 'react';
import * as BlinkIDReactNative from 'blinkid-react-native';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from 'react-native';

const licenseKey = Platform.select({
  // iOS license key for applicationID: com.microblink.sample
  ios:
    'sRwAAAEbb3JnLnJlYWN0anMubmF0aXZlLmZhc3RiYW5rFCTl8j522F3Llz/4ExGf9eWZnMvwqCT9Db8lHIFth/GUuDq1sYrvwfParWLjI6w3aMDSCwTrx4ZWiaOrdGFGeQCPDqgHehzhvyxPRmF+pZ3xlIsy0ilOBvdcbYXuLC/2ygw561P5InJgjAacY5qsw4/qe/0IMsnix4aVO9NSchRSERNDXIu7dc56s2gYzVVYTus1NcLRckbWvnU7GbefyB+aI0k+NKbSNWTkeaQTBKzbd2AEzBjHDMcCZpE0wEEd6g8z6Xo=',
  // android license key for applicationID: com.microblink.sample
  android:
    'sRwAAAAbb3JnLnJlYWN0anMubmF0aXZlLmZhc3RiYW5reiETcf6Z4F9q0pixParyIct1V9SlVtQbUIsPzLpbIqArZLEr7CGSbuwIY7VNcr4I8jW5B+Sz2Twu2e/YZrIlCvu3MqG98hQzwCzOoXzhTd/DQ8fEG2cKq0BAWPtCQc153Kc76XsGHgVCtSWDsDlxHOWulcs62F6pZFB498scRuGlSIiGq9Uhxy1edtKiCGyIbl2AV70U3jG7QqDulGDttuyHQaNrGc/BiGmr3HsD0FHvEgqmAFxQS4ke3YU7oubS0iDBjw8=',
});

var renderIf = function (condition: any, content: any) {
  if (condition) {
    return content;
  }
  return null;
};

function buildResult(result: any, key: any) {
  if (result && result != -1) {
    return key + ': ' + result + '\n';
  }
  return '';
}

function buildDateResult(result: any, key: any) {
  if (result) {
    return (
      key +
      ': ' +
      result.day +
      '.' +
      result.month +
      '.' +
      result.year +
      '.' +
      '\n'
    );
  }
  return '';
}

export default class Sample extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      showFrontImageDocument: false,
      resultFrontImageDocument: '',
      showBackImageDocument: false,
      resultBackImageDocument: '',
      showImageFace: false,
      resultImageFace: '',
      showSuccessFrame: false,
      successFrame: '',
      results: '',
      licenseKeyErrorMessage: '',
    } as any;
  }

  async scan() {
    try {
      // to scan any machine readable travel document (passports, visas and IDs with
      // machine readable zone), use MrtdRecognizer
      // var mrtdRecognizer = new BlinkIDReactNative.MrtdRecognizer();
      // mrtdRecognizer.returnFullDocumentImage = true;

      // var mrtdSuccessFrameGrabber = new BlinkIDReactNative.SuccessFrameGrabberRecognizer(mrtdRecognizer);

      // BlinkIDCombinedRecognizer automatically classifies different document types and scans the data from
      // the supported document
      var blinkIdCombinedRecognizer = new BlinkIDReactNative.BlinkIdCombinedRecognizer();
      blinkIdCombinedRecognizer.returnFullDocumentImage = true;
      blinkIdCombinedRecognizer.returnFaceImage = true;

      const scanningResults = await BlinkIDReactNative.BlinkID.scanWithCamera(
        new BlinkIDReactNative.BlinkIdOverlaySettings(),
        new BlinkIDReactNative.RecognizerCollection([
          blinkIdCombinedRecognizer /*, mrtdSuccessFrameGrabber*/,
        ]),
        licenseKey,
      );

      if (scanningResults) {
        let newState = {
          showFrontImageDocument: false,
          resultFrontImageDocument: '',
          showBackImageDocument: false,
          resultBackImageDocument: '',
          showImageFace: false,
          resultImageFace: '',
          results: '',
          showSuccessFrame: false,
          successFrame: '',
        };

        for (let i = 0; i < scanningResults.length; ++i) {
          let localState = this.handleResult(scanningResults[i]);
          newState.showFrontImageDocument =
            newState.showFrontImageDocument ||
            localState.showFrontImageDocument;
          if (localState.showFrontImageDocument) {
            newState.resultFrontImageDocument =
              localState.resultFrontImageDocument;
          }
          newState.showBackImageDocument =
            newState.showBackImageDocument || localState.showBackImageDocument;
          if (localState.showBackImageDocument) {
            newState.resultBackImageDocument =
              localState.resultBackImageDocument;
          }
          newState.showImageFace =
            newState.showImageFace || (localState as any).showImageFace;
          if (localState.resultImageFace) {
            newState.resultImageFace = localState.resultImageFace;
          }
          newState.results += localState.results;
          newState.showSuccessFrame =
            newState.showSuccessFrame || localState.showSuccessFrame;
          if (localState.successFrame) {
            newState.successFrame = localState.successFrame;
          }
        }
        newState.results += '\n';
        this.setState(newState);
      }
    } catch (error) {
      console.log(error);
      this.setState({
        showFrontImageDocument: false,
        resultFrontImageDocument: '',
        showBackImageDocument: false,
        resultBackImageDocument: '',
        showImageFace: false,
        resultImageFace: '',
        results: 'Scanning has been cancelled',
        showSuccessFrame: false,
        successFrame: '',
      });
    }
  }

  handleResult(result: any) {
    var localState = {
      showFrontImageDocument: false,
      resultFrontImageDocument: '',
      showBackImageDocument: false,
      resultBackImageDocument: '',
      resultImageFace: '',
      results: '',
      showSuccessFrame: false,
      successFrame: '',
    };

    if (result instanceof BlinkIDReactNative.BlinkIdCombinedRecognizerResult) {
      let blinkIdResult = result;

      let resultString =
        buildResult(blinkIdResult.firstName, 'First name') +
        buildResult(blinkIdResult.lastName, 'Last name') +
        buildResult(blinkIdResult.fullName, 'Full name') +
        buildResult(blinkIdResult.localizedName, 'Localized name') +
        buildResult(
          blinkIdResult.additionalNameInformation,
          'Additional name info',
        ) +
        buildResult(blinkIdResult.address, 'Address') +
        buildResult(
          blinkIdResult.additionalAddressInformation,
          'Additional address info',
        ) +
        buildResult(blinkIdResult.documentNumber, 'Document number') +
        buildResult(
          blinkIdResult.documentAdditionalNumber,
          'Additional document number',
        ) +
        buildResult(blinkIdResult.sex, 'Sex') +
        buildResult(blinkIdResult.issuingAuthority, 'Issuing authority') +
        buildResult(blinkIdResult.nationality, 'Nationality') +
        buildDateResult(blinkIdResult.dateOfBirth, 'Date of birth') +
        buildResult(blinkIdResult.age, 'Age') +
        buildDateResult(blinkIdResult.dateOfIssue, 'Date of issue') +
        buildDateResult(blinkIdResult.dateOfExpiry, 'Date of expiry') +
        buildResult(
          blinkIdResult.dateOfExpiryPermanent,
          'Date of expiry permanent',
        ) +
        buildResult(blinkIdResult.expired, 'Expired') +
        buildResult(blinkIdResult.maritalStatus, 'Martial status') +
        buildResult(blinkIdResult.personalIdNumber, 'Personal id number') +
        buildResult(blinkIdResult.profession, 'Profession') +
        buildResult(blinkIdResult.race, 'Race') +
        buildResult(blinkIdResult.religion, 'Religion') +
        buildResult(blinkIdResult.residentialStatus, 'Residential status') +
        buildResult(blinkIdResult.processingStatus, 'Processing status') +
        buildResult(blinkIdResult.recognitionMode, 'Recognition mode');
      let licenceInfo = blinkIdResult.driverLicenseDetailedInfo;
      if (licenceInfo) {
        resultString +=
          buildResult(licenceInfo.restrictions, 'Restrictions') +
          buildResult(licenceInfo.endorsements, 'Endorsements') +
          buildResult(licenceInfo.vehicleClass, 'Vehicle class') +
          buildResult(licenceInfo.conditions, 'Conditions');
      }

      // there are other fields to extract
      localState.results += resultString;

      // Document image is returned as Base64 encoded JPEG
      if (blinkIdResult.fullDocumentFrontImage) {
        localState.showFrontImageDocument = true;
        localState.resultFrontImageDocument =
          'data:image/jpg;base64,' + blinkIdResult.fullDocumentFrontImage;
      }
      if (blinkIdResult.fullDocumentBackImage) {
        localState.showBackImageDocument = true;
        localState.resultBackImageDocument =
          'data:image/jpg;base64,' + blinkIdResult.fullDocumentBackImage;
      }
      // Face image is returned as Base64 encoded JPEG
      if (blinkIdResult.faceImage) {
        (localState as any).showImageFace = true;
        localState.resultImageFace =
          'data:image/jpg;base64,' + blinkIdResult.faceImage;
      }
    }
    return localState;
  }

  render() {
    let displayFrontImageDocument = this.state.resultFrontImageDocument;
    let displayBackImageDocument = this.state.resultBackImageDocument;
    let displayImageFace = this.state.resultImageFace;
    let displaySuccessFrame = this.state.successFrame;
    let displayFields = this.state.results;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>BlinkID</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={this.scan.bind(this)} title="Scan" color="#48B2E8" />
        </View>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}>
          <Text style={styles.results}>{displayFields}</Text>
          {renderIf(
            this.state.showFrontImageDocument,
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                source={{uri: displayFrontImageDocument, scale: 3}}
                style={styles.imageResult}
              />
            </View>,
          )}
          {renderIf(
            this.state.showBackImageDocument,
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                source={{uri: displayBackImageDocument, scale: 3}}
                style={styles.imageResult}
              />
            </View>,
          )}
          {renderIf(
            this.state.showImageFace,
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                source={{uri: displayImageFace, scale: 3}}
                style={styles.imageResult}
              />
            </View>,
          )}
          {renderIf(
            this.state.showSuccessFrame,
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                source={{uri: displaySuccessFrame, scale: 3}}
                style={styles.imageResult}
              />
            </View>,
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50,
  },
  buttonContainer: {
    margin: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  results: {
    fontSize: 16,
    textAlign: 'left',
    margin: 10,
  },
  imageResult: {
    flex: 1,
    flexShrink: 1,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
