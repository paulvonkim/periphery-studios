"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made cookie choices
    const cookieConsent = localStorage.getItem("cookie-consent");

    // Only show banner if no consent has been given yet
    if (!cookieConsent) {
      // Add slight delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
    saveCookiePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
    setShowBanner(false);
  };

  const handleRejectNonEssential = () => {
    setCookiePreferences({
      essential: true,
      analytics: false,
      marketing: false,
    });
    saveCookiePreferences({
      essential: true,
      analytics: false,
      marketing: false,
    });
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    saveCookiePreferences(cookiePreferences);
    setShowSettings(false);
    setShowBanner(false);
  };

  const saveCookiePreferences = (preferences: any) => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));

    // Here you would typically initialize your analytics and marketing tools
    // based on the user's preferences
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:p-6 z-50 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-medium text-base">Cookie Settings</h3>
            <p className="text-sm text-gray-600 mt-1">
              This website uses cookies to enhance your experience. Essential
              cookies are necessary for the website to function properly.
              <Link href="/privacy" className="underline ml-1">
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRejectNonEssential}
            >
              Essential Only
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSettings(true)}
            >
              Customize
            </Button>
            <Button
              size="sm"
              className="bg-black text-white hover:bg-gray-800"
              onClick={handleAcceptAll}
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
            <DialogDescription>
              Customize which cookies you want to accept. Essential cookies
              cannot be disabled as they are necessary for the website to
              function properly.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="essential"
                checked={cookiePreferences.essential}
                disabled
              />
              <div>
                <Label htmlFor="essential" className="font-medium">
                  Essential Cookies
                </Label>
                <p className="text-sm text-gray-500">
                  These cookies are necessary for the website to function
                  properly and cannot be switched off.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="analytics"
                checked={cookiePreferences.analytics}
                onCheckedChange={(checked) =>
                  setCookiePreferences({
                    ...cookiePreferences,
                    analytics: checked === true,
                  })
                }
              />
              <div>
                <Label htmlFor="analytics" className="font-medium">
                  Analytics Cookies
                </Label>
                <p className="text-sm text-gray-500">
                  These cookies allow us to count visits and traffic sources so
                  we can measure and improve site performance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="marketing"
                checked={cookiePreferences.marketing}
                onCheckedChange={(checked) =>
                  setCookiePreferences({
                    ...cookiePreferences,
                    marketing: checked === true,
                  })
                }
              />
              <div>
                <Label htmlFor="marketing" className="font-medium">
                  Marketing Cookies
                </Label>
                <p className="text-sm text-gray-500">
                  These cookies enable personalized advertising and social media
                  features.
                </p>
              </div>
            </div>
          </div>

          <DialogFooter className="flex sm:justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowSettings(false)}
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="bg-black text-white hover:bg-gray-800"
              onClick={handleSavePreferences}
            >
              Save Preferences
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
