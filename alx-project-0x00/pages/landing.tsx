import React from 'react'
import Button from '@/components/Button'
import Card from "@/components/Card"

const Landing: React.FC = () => {
  const handleButtonClick = (buttonType: string) => {
    console.log(`${buttonType} button clicked!`)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Original Landing Content */}
        <div className="text-center mb-12">
          <h1 className="text-xl font-extralight mb-6">Landing Page</h1>
          <Card />
        </div>

        {/* Button Component Showcase */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Button Component Showcase
          </h2>
          <p className="text-lg text-gray-600">
            Explore different sizes and shapes of our reusable button component
          </p>
        </div>

        {/* Size Variations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Size Variations</h2>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button 
              title="Small Button" 
              styles=""
              size="small" 
              onClick={() => handleButtonClick('Small')}
            />
            <Button 
              title="Medium Button" 
              styles=""
              size="medium" 
              onClick={() => handleButtonClick('Medium')}
            />
            <Button 
              title="Large Button" 
              styles=""
              size="large" 
              onClick={() => handleButtonClick('Large')}
            />
          </div>
        </section>

        {/* Shape Variations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Shape Variations</h2>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button 
              title="Rounded Small" 
              styles=""
              shape="rounded-sm" 
              onClick={() => handleButtonClick('Rounded Small')}
            />
            <Button 
              title="Rounded Medium" 
              styles=""
              shape="rounded-md" 
              onClick={() => handleButtonClick('Rounded Medium')}
            />
            <Button 
              title="Rounded Large" 
              styles=""
              shape="rounded-lg" 
              onClick={() => handleButtonClick('Rounded Large')}
            />
            <Button 
              title="Rounded Full" 
              styles=""
              shape="rounded-full" 
              onClick={() => handleButtonClick('Rounded Full')}
            />
          </div>
        </section>

        {/* Combined Variations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Combined Variations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-lg font-medium text-gray-700">Small + Shapes</h3>
              <div className="flex flex-col space-y-2">
                <Button 
                  title="Small + SM" 
                  styles=""
                  size="small" 
                  shape="rounded-sm"
                  onClick={() => handleButtonClick('Small Rounded SM')}
                />
                <Button 
                  title="Small + MD" 
                  styles=""
                  size="small" 
                  shape="rounded-md"
                  onClick={() => handleButtonClick('Small Rounded MD')}
                />
                <Button 
                  title="Small + LG" 
                  styles=""
                  size="small" 
                  shape="rounded-lg"
                  onClick={() => handleButtonClick('Small Rounded LG')}
                />
                <Button 
                  title="Small + Full" 
                  styles=""
                  size="small" 
                  shape="rounded-full"
                  onClick={() => handleButtonClick('Small Rounded Full')}
                />
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-lg font-medium text-gray-700">Medium + Shapes</h3>
              <div className="flex flex-col space-y-2">
                <Button 
                  title="Medium + SM" 
                  styles=""
                  size="medium" 
                  shape="rounded-sm"
                  onClick={() => handleButtonClick('Medium Rounded SM')}
                />
                <Button 
                  title="Medium + MD" 
                  styles=""
                  size="medium" 
                  shape="rounded-md"
                  onClick={() => handleButtonClick('Medium Rounded MD')}
                />
                <Button 
                  title="Medium + LG" 
                  styles=""
                  size="medium" 
                  shape="rounded-lg"
                  onClick={() => handleButtonClick('Medium Rounded LG')}
                />
                <Button 
                  title="Medium + Full" 
                  styles=""
                  size="medium" 
                  shape="rounded-full"
                  onClick={() => handleButtonClick('Medium Rounded Full')}
                />
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-lg font-medium text-gray-700">Large + Shapes</h3>
              <div className="flex flex-col space-y-2">
                <Button 
                  title="Large + SM" 
                  styles=""
                  size="large" 
                  shape="rounded-sm"
                  onClick={() => handleButtonClick('Large Rounded SM')}
                />
                <Button 
                  title="Large + MD" 
                  styles=""
                  size="large" 
                  shape="rounded-md"
                  onClick={() => handleButtonClick('Large Rounded MD')}
                />
                <Button 
                  title="Large + LG" 
                  styles=""
                  size="large" 
                  shape="rounded-lg"
                  onClick={() => handleButtonClick('Large Rounded LG')}
                />
                <Button 
                  title="Large + Full" 
                  styles=""
                  size="large" 
                  shape="rounded-full"
                  onClick={() => handleButtonClick('Large Rounded Full')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Custom Styled Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Custom Styled Examples</h2>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button 
              title="Success Button" 
              styles=""
              size="medium" 
              shape="rounded-md"
              className="bg-green-500 hover:bg-green-600 focus:ring-green-500"
              onClick={() => handleButtonClick('Success')}
            />
            <Button 
              title="Warning Button" 
              styles=""
              size="medium" 
              shape="rounded-md"
              className="bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500 text-black"
              onClick={() => handleButtonClick('Warning')}
            />
            <Button 
              title="Danger Button" 
              styles=""
              size="medium" 
              shape="rounded-md"
              className="bg-red-500 hover:bg-red-600 focus:ring-red-500"
              onClick={() => handleButtonClick('Danger')}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Landing