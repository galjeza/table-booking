import Toggle from '../../components/form/Toggle';
import AccountSettings from './AccountSettings';
import GeneralSettings from './GeneralSettings';
import NotificationSettings from './NotificationSettings';
import PasswordSettings from './PasswordSettings';
export default function SettingsPage() {
  return (
    <>
      <GeneralSettings />
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <AccountSettings />
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <NotificationSettings />
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <PasswordSettings />
    </>
  );
}
