import { Redirect } from 'expo-router';

export default function WardsIndex() {
  // @ts-ignore
  return <Redirect href={'/(tabs)/(settings)/settings/'} />;
}
